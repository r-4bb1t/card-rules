import { useDrag } from "react-dnd";
import { DEFAULT_BLOCKS } from "../constants";
import cc from "classcat";
import Argument from "./argument";
import { ArgDefaultType, BLOCK_TYPE } from "@/app/types/block";
import { useBlockStore } from "@/app/store";

export default function Block({ blockId }: { blockId: string }) {
  const { blocks } = useBlockStore();
  const block = blocks.find((block) => block.id === blockId)!;
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: block.type,
      item: block,
      collect: (monitor) => ({
        opacity: 1,
      }),
    }),
    []
  );

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
          Object.keys(block.args).length > 0 && "mt-2",
        ])}
      >
        {Object.keys(block.args).map((key) => (
          <Argument
            key={
              (block.args[key as keyof typeof block.args] as ArgDefaultType).id
            }
            ruleId={block.ruleId}
            argKey={key}
            arg={block.args[key as keyof typeof block.args]}
          />
        ))}
      </div>
      {block.canHaveInner && (
        <div className="w-full h-12 bg-gray-200 rounded mt-4"></div>
      )}
    </div>
  );
}
