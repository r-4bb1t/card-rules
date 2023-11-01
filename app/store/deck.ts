import { create } from "zustand";
import { DeckType } from "../types/card";
import { DeckList, PlayingCardDeck } from "../constants/default-deck";

interface DeckStoreType {
  deck: DeckType;
  selectDeck: (deckId: string) => void;
}

export const useDeckStore = create<DeckStoreType>()((set) => ({
  deck: PlayingCardDeck,
  selectDeck: (deckId: string) => {
    set((state) => ({
      ...state,
      deck: DeckList.find((deck) => deck.id === deckId) || PlayingCardDeck,
    }));
  },
}));
