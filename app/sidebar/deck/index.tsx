import { useDeckStore, useGameStore } from "@/app/store";
import CardList from "./card-list";
import SelectDeck from "./select-deck";

export default function Deck() {
  const { deck } = useDeckStore();
  const { setDeck } = useGameStore();

  return (
    <div className="w-full relative h-full">
      <SelectDeck />
      <CardList />
      <button
        className="absolute right-4 bottom-4 btn btn-circle btn-neutral"
        onClick={() => setDeck(deck.cards, deck.image)}
      >
        OK
      </button>
    </div>
  );
}
