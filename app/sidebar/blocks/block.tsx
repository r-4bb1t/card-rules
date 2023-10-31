import { useDrag } from "react-dnd";
import { BLOCKS } from "../constants";
import cc from "classcat";
import Argument from "./argument";
import { BLOCK_TYPE } from "../types";

export default function Block({ type }: { type: keyof typeof BLOCKS }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: BLOCKS[type].id,
      item: "",
      collect: (monitor) => ({
        opacity: 1,
      }),
    }),
    []
  );

  const block = BLOCKS[type];

  return (
    <div
      ref={dragRef}
      style={{ opacity }}
      className="w-full p-4 bg-white rounded"
    >
      <div className="font-bold">{block.name}</div>
      <div className="text-xs">{block.description}</div>
      <div
        className={cc([
          "flex gap-2 items-center",
          block.args.length > 0 && "mt-2",
        ])}
      >
        {block.args.map((arg) => (
          <Argument key={arg.id} arg={arg} />
        ))}
      </div>
      {block.canHaveChildren && (
        <div className="w-full h-12 bg-gray-200 rounded mt-4"></div>
      )}
    </div>
  );
}
