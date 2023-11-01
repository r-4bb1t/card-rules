import { useGameStore } from "../store";
import Card from "./cards/card";

export default function FloorDeck() {
  const { game, deckImage } = useGameStore();

  return (
    <div className="w-full flex justify-center gap-4">
      <div className="stack">
        {game.submit.map((cardId, i) => (
          <Card
            key={i}
            card={game.deck.find((card) => card.id === cardId)!}
            size="sm"
            rotate={0}
            submitted
          />
        ))}
      </div>
      <div className="stack">
        {game.floor.map((_, i) => (
          <div
            className="relative border border-gray-400 w-24 h-32 rounded-xl bg-white flex items-center justify-center overflow-hidden"
            key={i}
          >
            <img className="w-full h-full object-cover" src={deckImage} />
            <div className="absolute bg-white rounded-full px-2 py-0.5 border border-gray-400">
              {game.floor.length}장
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
