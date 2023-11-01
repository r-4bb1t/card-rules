"use client";

import { useCallback, useEffect } from "react";
import Cards from "./cards";
import { useRuleStore, useGameStore, useBlockStore } from "../store";
import {
  BLOCK_CATEGORY,
  BLOCK_TYPE,
  BlockDefaultType,
  TargetType,
} from "../types/block";
import Header from "./header";
import FloorDeck from "./floor-deck";
import useAction from "../hooks/action";

export default function Play() {
  const { game, actionCount } = useGameStore();
  const { rules } = useRuleStore();
  const { blocks } = useBlockStore();
  const { action } = useAction();

  const handleBlockAction = useCallback(
    (blockId: string) => {
      const block = blocks.find((block) => block.id === blockId)!;

      if (action(block)) {
        block.inner.forEach((blockId) => {
          handleBlockAction(blockId);
        });
      }
    },
    [action, blocks]
  );

  useEffect(() => {
    rules.forEach((rule) => {
      rule.children.forEach((blockId) => {
        handleBlockAction(blockId);
      });
    });
  }, [actionCount]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Header />
      <div className="w-full h-full flex items-center pb-24">
        <FloorDeck />
      </div>
      <Cards
        cards={game.deck.filter((card) =>
          game.players[game.index].cards.includes(card.id)
        )}
      />
    </div>
  );
}
