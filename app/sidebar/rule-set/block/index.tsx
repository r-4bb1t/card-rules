import { useDrag, useDrop } from "react-dnd";
import cc from "classcat";
import Argument from "./argument";
import { ArgType, BlockType, CATEGORY_TYPE } from "@/app/types/block";
import { useBlockStore, useRuleStore } from "@/app/store";
import { useEffect, useState } from "react";

export default function Block({ blockId }: { blockId: string }) {
  const { blocks, addInner, copyBlock } = useBlockStore();
  const { moveBlockTo: addBlock } = useRuleStore();

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

  const [{ isOver }, drop] = useDrop(() => ({
    accept:
      block.ruleId === ""
        ? []
        : Object.keys(CATEGORY_TYPE)
            .filter((key) =>
              block.acceptInnerCategory.includes(
                key as keyof typeof CATEGORY_TYPE
              )
            )
            .map(
              (category) =>
                CATEGORY_TYPE[category as keyof typeof CATEGORY_TYPE]
            )
            .flat(),
    drop: (droppedBlock: BlockType) => {
      if (droppedBlock.ruleId == "") {
        addInner(block.id, copyBlock(droppedBlock, block.ruleId));
      } else {
        addBlock("", droppedBlock.id);
        addInner(block.id, droppedBlock.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      style={{ opacity }}
      className="w-full p-2 bg-white rounded hover:bg-gray-50 border"
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
            key={(block.args[key as keyof typeof block.args] as ArgType).id}
            ruleId={block.ruleId}
            blockId={blockId}
            argKey={key}
            arg={block.args[key as keyof typeof block.args]}
          />
        ))}
      </div>
      {block.inner.length > 0 && (
        <div className="mt-4">
          {block.inner.map((innerBlockId) => (
            <div key={innerBlockId} className="border-l-2 border-l-gray-300">
              <Block blockId={innerBlockId} />
            </div>
          ))}
        </div>
      )}
      {block.acceptInnerCategory.length > 0 && (
        <div
          className={cc([
            "w-full h-8 rounded mt-2 flex justify-center items-center",
            isOver ? "bg-primary" : "bg-gray-100",
          ])}
          ref={drop}
        >
          +
        </div>
      )}
    </div>
  );
}
