import { useDeckStore } from "@/app/store/deck";
import Card from "./card";

export default function CardList() {
  const { deck } = useDeckStore();
  return (
    <div className="w-full flex flex-wrap p-4 gap-2">
      {deck.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
