const Deck = require("./src/deck");
const mydeck = new Deck();
console.log(mydeck.deck);
console.log(mydeck.deck.length);

test("testing deck num", () => {
  expect(mydeck.deck.length).toBe(52);
  expect(mydeck.discardPile.length).toBe(0);
});

// should return a stack of 54 cards 
test("Initialize deck without jokers", () => {
  const mydeck = new Deck();
  expect(mydeck.deck.length).toBe(48);
  expect(mydeck.discardPile.length).toBe(0);
});

test("Draw a card from the deck", () => {
  const mydeck = new Deck();
  const drawnCard = mydeck.draw();
  console.log(drawnCard);

  expect(mydeck.deck.length).toBe(51);
  expect(mydeck.discardPile.length).toBe(0);
});

test("Discard the drawn card", () => {
  const mydeck = new Deck();
  const drawnCard = mydeck.draw();
  mydeck.discard(drawnCard);
  console.log(mydeck.discardPile);
  console.log(mydeck.discardPile.length);

  expect(mydeck.deck.length).toBe(51);
  expect(mydeck.discardPile.length).toBe(1);
});