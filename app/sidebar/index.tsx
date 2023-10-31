"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Block from "./blocks/block";
import { BLOCKS } from "./constants";
import DropList from "./droplist";

export default function Sidebar() {
  return (
    <DndProvider backend={HTML5Backend}>
      <aside className="h-screen shrink-0 flex">
        <div className="w-64 flex flex-col p-4 gap-2 bg-gray-300">
          {Object.keys(BLOCKS).map((key) => (
            <Block type={key} key={key} />
          ))}
        </div>
        <div className="w-96 h-full bg-white border-l p-4">
          <DropList />
        </div>
      </aside>
    </DndProvider>
  );
}
