// Create a solution that will tell us what poker set we have. 
// The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set.



// Function to generate a standard deck of 52 cards
function generateDeck() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
}

// Function to shuffle the deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Function to deal 5 cards from the deck
function dealHand(deck) {
  return deck.slice(0, 5);
}

// Function to determine the poker hand
function determinePokerHand(hand) {
  // Sort the hand by card values for easier analysis
  hand.sort((a, b) => cardValueToInt(b.value) - cardValueToInt(a.value));

  // Check for a flush
  const isFlush = hand.every(card => card.suit === hand[0].suit);

  // Check for a straight
  const isStraight = isConsecutive(hand.map(card => cardValueToInt(card.value)));

  // Check for pairs and three-of-a-kind
  const cardCounts = countCardValues(hand);
  const pairs = getPairs(cardCounts);
  const threeOfAKind = getThreeOfAKind(cardCounts);

  // Determine the poker hand based on the analysis
  if (isFlush && isStraight) {
    console.log('Straight Flush');
  } else if (threeOfAKind && pairs.length === 1) {
    console.log('Full House');
  } else if (isFlush) {
    console.log('Flush');
  } else if (isStraight) {
    console.log('Straight');
  } else if (threeOfAKind) {
    console.log('Three of a Kind');
  } else if (pairs.length === 2) {
    console.log('Two Pair');
  } else if (pairs.length === 1) {
    console.log('One Pair');
  } else {
    console.log('High Card');
  }
}

// Helper function to convert card values to integers for sorting
function cardValueToInt(value) {
  if (value === 'A') return 14; // Ace
  if (value === 'K') return 13; // King
  if (value === 'Q') return 12; // Queen
  if (value === 'J') return 11; // Jack
  return parseInt(value, 10);
}

// Helper function to check if an array is consecutive
function isConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) {
      return false;
    }
  }
  return true;
}

// Helper function to count occurrences of each card value
function countCardValues(hand) {
  const counts = {};
  for (const card of hand) {
    counts[card.value] = (counts[card.value] || 0) + 1;
  }
  return counts;
}

// Helper function to get pairs from card value counts
function getPairs(cardCounts) {
  return Object.keys(cardCounts).filter(value => cardCounts[value] === 2);
}

// Helper function to get three-of-a-kind from card value counts
function getThreeOfAKind(cardCounts) {
  return Object.keys(cardCounts).find(value => cardCounts[value] === 3);
}

// Main program
const deck = generateDeck();
shuffleDeck(deck);

const hand = dealHand(deck);
console.log('Your hand:', hand);

determinePokerHand(hand);
