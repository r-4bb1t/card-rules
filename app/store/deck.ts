import { create } from "zustand";
import { CardDefaultType, DeckType } from "../types/card";
import { DeckList, PlayingCardDeck } from "../constants/deck";

interface DeckStoreType {
  deck: DeckType;
  selectDeck: (deckId: string) => void;
}

export const useDeckStore = create<DeckStoreType>()((set) => ({
  deck: PlayingCardDeck,
  selectDeck: (deckId: string) => {
    set((state) => ({
      deck: DeckList.find((deck) => deck.id === deckId) || PlayingCardDeck,
    }));
  },
}));
