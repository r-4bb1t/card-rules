import { create } from "zustand";
import { RuleType } from "./types/rules";
import { ArgDefaultType, BlockType } from "./types/blocks";
import { DEFAULT_BLOCKS } from "./sidebar/constants";
import { createRandomId } from "./libs/create-random-id";

interface RuleStoreType {
  rules: RuleType[];
  addRule: (defaultBlockId: string) => void;
}

export const useRuleStore = create<RuleStoreType>()((set) => ({
  rules: [],
  addRule: (defaultBlockId: string) => {
    set((state) => ({
      rules: [
        ...state.rules,
        {
          id: createRandomId(),
          name: "새 규칙",
          description: "새 규칙입니다.",
          children: [defaultBlockId],
        },
      ],
    }));
  },
}));

interface BlockStoreType {
  blocks: BlockType[];
  changeArg: (blockId: string, newArg: { key: string; value: string }) => void;
  copyBlock: (block: BlockType, ruleId: string) => string;
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
  copyBlock: (block: BlockType, ruleId: string) => {
    const newId = createRandomId();
    set((state) => ({
      blocks: [
        ...state.blocks,
        {
          ...block,
          id: newId,
          ruleId,
        },
      ],
    }));
    return newId;
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
