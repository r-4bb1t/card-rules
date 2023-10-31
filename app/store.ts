import { create } from "zustand";
import { RuleType } from "./types/rules";
import { ArgDefaultType, BlockType } from "./types/blocks";
import { DEFAULT_BLOCKS } from "./sidebar/constants";

interface RuleStoreType {
  rules: RuleType[];
  addRule: (rule: RuleType) => void;
}

export const useRuleStore = create<RuleStoreType>()((set) => ({
  rules: [],
  addRule: (rule: RuleType) =>
    set((state) => ({ rules: [...state.rules, rule] })),
}));

interface BlockStoreType {
  blocks: BlockType[];
  changeArg: (blockId: string, newArg: { key: string; value: string }) => void;
}

export const useBlockStore = create<BlockStoreType>()((set) => ({
  blocks: DEFAULT_BLOCKS,
  changeArg: (blockId: string, newArg: { key: string; value: string }) => {
    set((state) => ({
      blocks: state.blocks.map((block) => {
        if (block.id === blockId) {
          return {
            ...block,
            args: {
              ...block.args,
              [newArg.key]: {
                id: (
                  block.args[
                    newArg.key as keyof typeof block.args
                  ] as ArgDefaultType
                ).id,
                value: newArg.value,
              },
            },
          } as BlockType;
        } else return block;
      }),
    }));
  },
  /* addInner: (ruleId: string, innerRuleId: string) => {
    set((state) => ({
      rules: state.rules.map((rule) => {
        if (rule.id === ruleId) {
          return {
            ...rule,
            inner: [...rule.children, innerRuleId],
          };
        } else return rule;
      }),
    }));
  }, */
}));
