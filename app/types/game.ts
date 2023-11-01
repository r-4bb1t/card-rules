import { PlayingCardDeck } from "../constants/default-deck";
import { createRandomId } from "../libs/create-random-id";
import { CardType, DeckType } from "./card";

export class GameType {
  id: string = createRandomId();
  title: string = "새 게임";
  turn: number = 0;
  index: number = 0;
  players: PlayerType[] = [new PlayerType()];
  deck: CardType[] = PlayingCardDeck.cards;
  floor: string[] = PlayingCardDeck.cards.map((card) => card.id);
}

export class PlayerType {
  id: string = createRandomId();
  name: string = "새 플레이어";
  cards: string[] = [];
}
