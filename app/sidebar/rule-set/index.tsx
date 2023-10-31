"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import RuleList from "./rule-list";
import BlockList from "./block-list";

export default function RuleSet() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-full">
        <BlockList />
        <div className="w-96 h-full bg-white p-4">
          <RuleList />
        </div>
      </div>
    </DndProvider>
  );
}
