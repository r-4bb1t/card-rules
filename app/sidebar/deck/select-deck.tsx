import { DeckList } from "@/app/constants/deck";
import { useDeckStore } from "@/app/store/deck";
import cc from "classcat";

export default function SelectDeck() {
  const { deck, selectDeck } = useDeckStore();

  return (
    <div className="grid grid-cols-2 p-4 gap-2">
      {DeckList.map((item, i) => (
        <div
          className={cc([
            "border rounded p-4 flex gap-4 hover:bg-gray-50",
            item.id === deck.id && "border-gray-600",
          ])}
          key={item.id}
          onClick={() => selectDeck(item.id)}
        >
          <div className="w-24 h-24">
            <img src={item.image} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-bold text-lg">{item.name}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
            <div className="text-sm mt-1">🃏 × {item.cards.length}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
