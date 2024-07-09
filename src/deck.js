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
var Deck = /** @class */ (function () {
    function Deck(hasJokers) {
        if (hasJokers === void 0) { hasJokers = false; }
        this.deck = [];
        this.discardPile = [];
        this.initializeDeck(hasJokers);
        this.shuffle();
        // console.log(this.initalizeDeck)
    }
    Deck.prototype.draw = function () {
        // remove first card from deck then return it
        // array.prototype.shift()
        if (this.deck.length === 0)
            throw new Error("No cards left in the deck");
        return this.deck.shift();
    };
    Deck.prototype.discard = function (card) {
        // add card to discard pile
        this.discardPile.push(card);
    };
    Deck.prototype.shuffle = function () {
        var _a;
        // randomize cards in deck
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.deck[j], this.deck[i]], this.deck[i] = _a[0], this.deck[j] = _a[1];
        }
    };
    // initializes deck???
    Deck.prototype.initializeDeck = function (hasJokers) {
        var suits = ["hearts", "diamonds", "clubs", "spades"];
        var ranks = [
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
        for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
            var suit = suits_1[_i];
            for (var _a = 0, ranks_1 = ranks; _a < ranks_1.length; _a++) {
                var rank = ranks_1[_a];
                this.deck.push({ suit: suit, rank: rank });
            }
        }
        // if hasJokers 
        // add jokers to deck
        if (hasJokers) {
            this.deck.push({ suit: "Joker", rank: "Joker" });
            this.deck.push({ suit: "Joker", rank: "Joker" });
        }
    };
    return Deck;
}());
module.exports = Deck;
