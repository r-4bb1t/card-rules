import { useBlockStore, useRuleStore } from "@/app/store";
import Block from "./block";

export default function BlockList() {
  const { blocks } = useBlockStore();
  return (
    <div className="w-2/5 shrink-0 flex flex-col p-4 gap-2 bg-white">
      <div className="sticky top-0 font-bold">Blocks</div>
      {blocks
        .filter((block) => block.ruleId === "")
        .map((block) => (
          <Block key={block.id} blockId={block.id} />
        ))}
    </div>
  );
}
