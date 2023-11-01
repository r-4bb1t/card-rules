import { useGameStore } from "../store";
import { BLOCK_TYPE, BlockType, TargetType } from "../types/block";
import { DrawBlockType } from "../types/block/draw";
import { IfBlockType } from "../types/block/if";

export default function useAction() {
  const { game, draw, addTurn } = useGameStore();
  const action = (block: BlockType): boolean => {
    switch (block.type) {
      case BLOCK_TYPE.DRAW:
        const target = (block as DrawBlockType).args.target.value.value,
          count = parseInt((block as DrawBlockType).args.count.value.value);
        alert("카드를 뽑습니다.");
        if (target === "all") {
          draw(
            game.players.map((player) => player.id),
            count
          );
        } else if (target === "me") {
          draw([game.players[game.index].id], count);
        }
        return false;
      case BLOCK_TYPE.GAMESTART:
        const start = game.turn === 0;
        if (start) {
          alert("게임을 시작합니다.");
          addTurn();
        }
        return start;
      case BLOCK_TYPE.IF:
        const operator = (block as IfBlockType).args.operator.value.value,
          a = (block as IfBlockType).args.A.value.value,
          b = (block as IfBlockType).args.B.value.value;
        switch (operator) {
          case "==":
            return a === b;
          case "!=":
            return a !== b;
          case ">":
            return a > b;
          case "<":
            return a < b;
          case ">=":
            return a >= b;
          case "<=":
            return a <= b;
          default:
            return false;
        }
      default:
        return false;
    }
  };
  return { action };
}
