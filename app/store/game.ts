import { create } from "zustand";
import { GameType } from "../types/game";
import { CardType } from "../types/card";
import { PlayingCardDeck } from "../constants/default-deck";

interface GameStoreType {
  game: GameType;
  actionCount: number;
  addActionCount: () => void;
  restart: () => void;
  deckImage: string;
  draw: (playerIds: string[], count: number) => void;
  setDeck: (deck: CardType[], deckImage: string) => void;
  addTurn: () => void;
}

export const useGameStore = create<GameStoreType>()((set) => ({
  game: new GameType(),
  deckImage: PlayingCardDeck.image,
  actionCount: 0,
  addActionCount: () => {
    set((state) => ({
      ...state,
      actionCount: state.actionCount + 1,
    }));
  },
  restart: () => {
    set((state) => ({
      ...state,
      game: {
        ...new GameType(),
        deck: state.game.deck,
        floor: state.game.deck.map((card) => card.id),
      },
      actionCount: state.actionCount === 0 ? -1 : 0,
    }));
  },
  draw: (playerIds: string[], count: number) => {
    set((state) => {
      const cards = state.game.floor
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
      return {
        ...state,
        game: {
          ...state.game,
          players: state.game.players.map((player) => {
            if (playerIds.includes(player.id)) {
              return {
                ...player,
                cards: [...player.cards, ...cards],
              };
            } else return player;
          }),
          floor: state.game.floor.filter((cardId) => !cards.includes(cardId)),
        },
      };
    });
  },
  setDeck: (deck: CardType[], deckImage: string) => {
    set((state) => ({
      ...state,
      game: {
        ...state.game,
        deck,
        floor: deck.map((card) => card.id),
      },
      deckImage: deckImage,
    }));
  },
  addTurn: () => {
    set((state) => ({
      ...state,
      game: {
        ...state.game,
        turn: state.game.turn + 1,
      },
    }));
  },
}));
