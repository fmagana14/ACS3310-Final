type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";
type CardColor = "red" | "black";
type Joker = "Joker";
interface Card {
  suit: Suit | Joker;
  rank: Rank | Joker;
}

// class Card {
//     suit: Suit;
//     rank: Rank;
//     cardcolor: CardColor

//     constructor(suit: Suit, rank: Rank) {
//         this.suit = suit
//         this.rank = rank
//         this.cardcolor = suit === "hearts" || suit === "diamonds" ? "red" : "black"

//     }
// }

// defines deck
class Deck {
  deck: Card[] = [];
  discardPile: Card[] = [];
  
  draw () : Card {
    // remove first card from deck then return it
    // array.prototype.shift()
    if (this.deck.length === 0) throw new Error("No cards left in the deck");
    return this.deck.shift()!;
  }
  
  discard (card : Card): void {
    // add card to discard pile
    this.discardPile.push(card);
  }

  shuffle(): void {
    // randomize cards in deck
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  constructor(hasJokers = false) {

    this.initializeDeck(hasJokers);
    this.shuffle();
    // console.log(this.initalizeDeck)
  }

  // initializes deck???
  initializeDeck(hasJokers: boolean): void {
    const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
    const ranks: Rank[] = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    this.deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        this.deck.push({ suit, rank });
      }
    }
    // if hasJokers 
    // add jokers to deck
    if (hasJokers) {
      this.deck.push({ suit: "Joker", rank: "Joker" });
      this.deck.push({ suit: "Joker", rank: "Joker" });
    }
  }
}
module.exports = Deck;


// tsc src/deck.ts 

// npm test