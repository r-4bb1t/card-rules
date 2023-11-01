import { useBlockStore, useGameStore } from "../store";

export default function Header() {
  const { game, restart } = useGameStore();

  const handleRestart = () => {
    restart();
  };

  return (
    <header className="w-full h-16 bg-gray-100 border-b flex items-center justify-between px-8">
      {game.title}
      <div className="flex flex-col items-center">
        {game.turn} 번째 턴
        <div className="text-sm">{game.players[game.index].name} 차례</div>
      </div>
      <button
        onClick={() => {
          handleRestart();
        }}
        className="btn btn-neutral btn-sm"
      >
        초기화
      </button>
    </header>
  );
}
