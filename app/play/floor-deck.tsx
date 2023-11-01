import { useGameStore } from "../store";

export default function FloorDeck() {
  const { game, deckImage } = useGameStore();

  return (
    <div className="w-full flex justify-center">
      <div className="stack">
        {game.floor.map((_, i) => (
          <div
            className="relative border border-gray-400 w-24 h-32 rounded-xl bg-white flex items-center justify-center overflow-hidden"
            key={i}
          >
            <img
              className="absolute w-full h-full object-cover"
              src={deckImage}
            />
            <div className="bg-white rounded-full px-2 py-1">
              {game.floor.length}장
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
