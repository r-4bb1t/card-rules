"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import RuleList from "./rule-list";
import BlockList from "./block-list";

export default function RuleSet() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-full">
        <BlockList />
        <RuleList />
      </div>
    </DndProvider>
  );
}
