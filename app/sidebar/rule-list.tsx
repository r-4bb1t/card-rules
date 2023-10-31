import { useDrop } from "react-dnd";
import { DEFAULT_BLOCKS } from "./constants";
import { useBlockStore, useRuleStore } from "../store";
import { BlockType } from "../types/block";
import Rule from "./rule";
import { createRandomId } from "../libs/create-random-id";

export default function RuleList() {
  const { rules, addRule } = useRuleStore();
  const { copyBlock } = useBlockStore();

  const [_, drop] = useDrop(() => ({
    accept: Object.values(DEFAULT_BLOCKS).map((block) => block.type),
    drop: (block: BlockType) => {
      if (block.ruleId == "") {
        addRule(copyBlock(block, createRandomId()));
      } else {
        // TODO: rule reordering
      }
    },
  }));
  return (
    <div
      className="w-full h-full bg-gray-100 p-2 gap-2 flex flex-col"
      ref={drop}
    >
      {rules.map((rule) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}
