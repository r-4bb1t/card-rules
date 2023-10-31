import { useDrag, useDrop } from "react-dnd";
import { DEFAULT_BLOCKS } from "../constants";
import cc from "classcat";
import Argument from "./argument";
import { RuleType } from "@/app/types/rule";
import { ArgDefaultType, BlockType } from "@/app/types/block";
import { useRuleStore } from "@/app/store";
import Block from "./block";

export default function Rule({ rule }: { rule: RuleType }) {
  return (
    <div className="w-full p-4 bg-white rounded border">
      <div className="font-bold">{rule.name}</div>
      <div className="text-xs text-gray-400">{rule.id}</div>
      <hr className="my-2" />
      {rule.children.map((blockId) => (
        <Block key={blockId} blockId={blockId} />
      ))}
    </div>
  );
}
