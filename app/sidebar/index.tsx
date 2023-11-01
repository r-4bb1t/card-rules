"use client";

import { useState } from "react";
import RuleSet from "./rule-set";
import cc from "classcat";
import Deck from "./deck";

export default function Sidebar() {
  const Tab = ["rule", "deck"];
  const [tab, setTab] = useState("rule");
  return (
    <aside className="relative h-screen shrink-0 flex flex-col border-l items-center overflow-auto w-[640px]">
      <div className="tabs pt-2 flex-nowrap w-full bg-gray-100 sticky top-0 z-10">
        <div className="tab tab-lifted w-full" />
        {Tab.map((tabName) => (
          <div
            key={tabName}
            className={cc(["tab tab-lifted", tab === tabName && "tab-active"])}
            onClick={() => setTab(tabName)}
          >
            {tabName}
          </div>
        ))}
        <div className="tab tab-lifted w-full" />
      </div>
      {tab === "rule" && <RuleSet />}
      {tab === "deck" && <Deck />}
    </aside>
  );
}
