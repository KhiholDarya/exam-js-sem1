// 1.Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.

function findHeavyBallIndex(balls) {
  const n = balls.length;

  // Randomly select two indices for the first weighing
  const index1 = Math.floor(Math.random() * n);
  let index2 = Math.floor(Math.random() * n);

  // Ensure index2 is different from index1
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * n);
  }

  // Perform the first weighing
  const firstWeighingResult = balls[index1] - balls[index2];

  // Identify the potential heaviest group
  let potentialHeaviestIndices;
  if (firstWeighingResult === 0) {
    // If the first weighing is balanced, consider all indices
    potentialHeaviestIndices = Array.from({ length: n }, (_, i) => i);
  } else {
    // If the first weighing is unbalanced, choose the potentially heaviest side
    potentialHeaviestIndices = firstWeighingResult > 0 ? [index1] : [index2];
  }

  // Check if all balls have the same weight
  const allBallsSameWeight = balls.every((ball, index) => ball === balls[0]);

  if (allBallsSameWeight) {
    console.log('All balls have the same weight');
    return null; // No heavy ball in this case
  }

  // Find the index of the heaviest ball by checking all numbers
  let indexOfHeaviestBall = potentialHeaviestIndices[0];
  for (let i = 0; i < n; i++) {
    if (balls[i] > balls[indexOfHeaviestBall]) {
      indexOfHeaviestBall = i;
    }
  }

  return indexOfHeaviestBall;
}

// Example usage
const balls = [1, 2, 1, 1, 1, 1, 1, 1];
const heavyBallIndex = findHeavyBallIndex(balls);

if (heavyBallIndex !== null) {
  console.log(`Index of the heavy ball: ${heavyBallIndex}`);
}
