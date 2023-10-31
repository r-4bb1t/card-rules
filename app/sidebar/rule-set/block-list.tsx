import { useBlockStore } from "@/app/store";
import Block from "./block";

export default function BlockList() {
  const { blocks } = useBlockStore();
  return (
    <div className="w-64 flex flex-col p-4 gap-2 bg-white">
      {blocks
        .filter((block) => block.ruleId === "")
        .map((block) => (
          <Block key={block.id} blockId={block.id} />
        ))}
    </div>
  );
}
