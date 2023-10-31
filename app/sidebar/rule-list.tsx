import { useDrop } from "react-dnd";
import { DEFAULT_BLOCKS } from "./constants";
import { useBlockStore, useRuleStore } from "../store";
import { BLOCK_TYPE, BlockType } from "../types/block";
import Rule from "./rule";
import { createRandomId } from "../libs/create-random-id";
import classcat from "classcat";

export default function RuleList() {
  const { rules, addRule } = useRuleStore();
  const { copyBlock } = useBlockStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.keys(BLOCK_TYPE).map(
      (key) => BLOCK_TYPE[key as keyof typeof BLOCK_TYPE]
    ),
    drop: (block: BlockType, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      if (block.ruleId == "") {
        const ruleId = createRandomId();
        addRule(copyBlock(block, ruleId), ruleId);
      } else {
        // TODO: rule reordering
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  }));
  return (
    <div
      className={classcat([
        "w-full h-full p-2 gap-2 flex flex-col",
        isOver ? "bg-primary" : "bg-gray-100",
      ])}
      ref={drop}
    >
      {rules.map((rule) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}
