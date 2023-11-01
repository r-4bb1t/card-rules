import { DeckType } from "../types/card";
import {
  FRUIT_CARD_FRUIT,
  FRUIT_CARD_NUMBER,
  FruitCardType,
} from "../types/card/fruit";
import {
  PLAYING_CARD_NUMBER,
  PLAYING_CARD_SUIT,
  PlayingCardType,
} from "../types/card/playing";

export const PlayingCardDeck: DeckType = {
  id: "playing",
  name: "Playing Card Deck",
  description: "A standard 52 card deck.",
  image:
    "https://t4.ftcdn.net/jpg/02/84/32/21/360_F_284322178_4gxGLWFFujUQpE7p31xMLDt916vayMgs.jpg",
  cards: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    .map((number) => {
      return ["diamond", "heart", "spade", "club"].map((suit) => {
        const card = new PlayingCardType();
        card.values = {
          suit: suit as PLAYING_CARD_SUIT,
          number: number as PLAYING_CARD_NUMBER,
        };
        return card;
      });
    })
    .flat(),
};

export const FruitDeck: DeckType = {
  id: "fruit",
  name: "Fruity Deck",
  description: "A deck of fruit cards.",
  image:
    "https://media.istockphoto.com/id/1194235751/vector/fruit-and-berry-background-abstract-food-seamless-pattern-fresh-fruits-wallpaper-with-apple.jpg?s=612x612&w=0&k=20&c=6F3JSemEMGit8LE3DqXFKlIWMIxAba0PT8Quoa_XbtA=",
  cards: [1, 2, 3, 4, 5]
    .map((number) => {
      return ["apple", "banana", "orange", "grape", "peach"].map((fruit) => {
        const card = new FruitCardType();
        card.values = {
          fruit: fruit as FRUIT_CARD_FRUIT,
          number: number as FRUIT_CARD_NUMBER,
        };
        return card;
      });
    })
    .flat(),
};

export const DeckList = [PlayingCardDeck, FruitDeck];
