import { CardDefaultType, DECK_TYPE } from ".";

export type FRUIT_CARD_FRUIT =
  | "apple"
  | "banana"
  | "orange"
  | "grape"
  | "peach";
export type FRUIT_CARD_NUMBER = 1 | 2 | 3 | 4 | 5;

export class FruitCardType extends CardDefaultType {
  deck = DECK_TYPE.FRUIT;
  values!: { fruit: FRUIT_CARD_FRUIT; number: FRUIT_CARD_NUMBER };
}
