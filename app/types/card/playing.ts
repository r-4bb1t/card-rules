import { CardDefaultType, DECK_TYPE } from ".";

export type PLAYING_CARD_SUIT = "diamond" | "heart" | "spade" | "club";
export type PLAYING_CARD_NUMBER =
  | "A"
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
  | "K";

export class PlayingCardType extends CardDefaultType {
  deck = DECK_TYPE.PLAYING;
  values!: { suit: PLAYING_CARD_SUIT; number: PLAYING_CARD_NUMBER };
}
