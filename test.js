const Deck = require("./src/deck");
const mydeck = new Deck();
console.log(mydeck.deck);
console.log(mydeck.deck.length);
test("testing deck num", () => {
  expect(mydeck.deck.length).toBe(52);
  expect(mydeck.discardPile.length).toBe(0);
});
