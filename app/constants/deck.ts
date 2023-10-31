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
    "https://www.playingcardshop.eu/media/catalog/product/cache/febd137f189f7d15678e3e12be106b29/b/r/bridge-kaartspel-ace-linen-finish-rood.jpg",
  cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
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
    "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
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
