import { useDrop } from "react-dnd";
import { DEFAULT_BLOCKS } from "./constants";
import { useRuleStore } from "../store";
import { BlockType } from "../types/blocks";
import Rule from "./blocks/rule";
import { createRandomId } from "../libs/create-random-id";

export default function RuleList() {
  const { rules, addRule } = useRuleStore();
  const [_, drop] = useDrop(() => ({
    accept: Object.values(DEFAULT_BLOCKS).map((block) => block.type),
    drop: (block: BlockType & { rule: boolean }) => {
      if (block.rule) {
        // TODO: rule reordering
      } else {
        addRule({
          id: createRandomId(),
          name: "새 규칙",
          description: "새 규칙입니다.",
          children: [block.id],
        });
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
