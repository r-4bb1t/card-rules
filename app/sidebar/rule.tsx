import { RuleType } from "@/app/types/rule";
import Block from "./blocks/block";
import { useDrop } from "react-dnd";
import { BLOCK_TYPE, BlockType } from "../types/block";
import { useBlockStore, useRuleStore } from "../store";
import classcat from "classcat";

export default function Rule({ rule }: { rule: RuleType }) {
  const { moveBlock } = useRuleStore();
  const { copyBlock } = useBlockStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.keys(BLOCK_TYPE).map(
      (key) => BLOCK_TYPE[key as keyof typeof BLOCK_TYPE]
    ),
    drop: (block: BlockType) => {
      if (block.ruleId == "") {
        moveBlock(rule.id, copyBlock(block, rule.id));
      } else {
        moveBlock(rule.id, block.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="w-full bg-white rounded border">
      <div className="px-4 py-2 bg-gray-50">
        <div className="font-bold">{rule.name}</div>
        <div className="text-xs text-gray-400">{rule.id}</div>
      </div>
      <hr />
      {rule.children.map((blockId) => (
        <Block key={blockId} blockId={blockId} />
      ))}
      <div
        className={classcat([
          "w-full h-8 flex justify-center items-center",
          isOver ? "bg-primary" : "bg-gray-100",
        ])}
        ref={drop}
      >
        +
      </div>
    </div>
  );
}
