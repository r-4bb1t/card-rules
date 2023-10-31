"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Block from "./blocks/block";
import { DEFAULT_BLOCKS } from "./constants";
import RuleList from "./rule-list";
import { BLOCK_TYPE } from "../types/block";
import { useBlockStore } from "../store";

export default function Sidebar() {
  const { blocks } = useBlockStore();
  return (
    <DndProvider backend={HTML5Backend}>
      <aside className="h-screen shrink-0 flex">
        <div className="w-64 flex flex-col p-4 gap-2 bg-gray-300">
          {blocks
            .filter((block) => block.ruleId === "")
            .map((block) => (
              <Block key={block.id} blockId={block.id} />
            ))}
        </div>
        <div className="w-96 h-full bg-white border-l p-4">
          <RuleList />
        </div>
      </aside>
    </DndProvider>
  );
}
