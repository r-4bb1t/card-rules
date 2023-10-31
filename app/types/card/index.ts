import { createRandomId } from "../../libs/create-random-id";
import { FruitCardType } from "./fruit";
import { PlayingCardType } from "./playing";

export class CardDefaultType {
  id: string = createRandomId();
  deck!: DECK_TYPE;
  image: string = "";
  values!: { [key: string]: any };
}

export type CardType = PlayingCardType | FruitCardType;

export enum DECK_TYPE {
  PLAYING = "playing",
  FRUIT = "fruit",
}

export class DeckType {
  id!: string;
  name!: string;
  cards: CardType[] = [];
  description: string = "";
  image: string = "";
}
