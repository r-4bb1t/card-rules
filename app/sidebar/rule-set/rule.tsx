import { RuleType } from "@/app/types/rule";
import Block from "./block";
import { useDrop } from "react-dnd";
import { BLOCK_TYPE, BlockType } from "../../types/block";
import { useBlockStore, useRuleStore } from "../../store";
import classcat from "classcat";

export default function Rule({ rule }: { rule: RuleType }) {
  const { moveBlockTo: moveBlock } = useRuleStore();
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
      <div className="p-2 bg-gray-50">
        <div>
          <input
            className="input input-sm input-ghost w-full px-2 text-base font-bold"
            value={rule.name}
          />
        </div>
        <div>
          <input
            className="input input-xs input-ghost w-full"
            value={rule.description}
            //  onChange={}
          />
        </div>
      </div>
      <hr />
      <div className="p-2 flex flex-col gap-2">
        {rule.children.map((blockId) => (
          <Block key={blockId} blockId={blockId} />
        ))}
      </div>
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
