import { RuleType } from "@/app/types/rule";
import Block from "./blocks/block";

export default function Rule({ rule }: { rule: RuleType }) {
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
    </div>
  );
}
