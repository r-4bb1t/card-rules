import { useDeckStore } from "@/app/store";
import CardRender from "../../components/card";

export default function CardList() {
  const { deck } = useDeckStore();
  return (
    <div className="w-full flex flex-wrap p-4 gap-2">
      {deck.cards.map((card) => (
        <div
          key={card.id}
          className="w-12 h-20 bg-white rounded-sm border text-[12px]"
        >
          <CardRender card={card} />
        </div>
      ))}
    </div>
  );
}
