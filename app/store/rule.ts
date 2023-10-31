import { create } from "zustand";
import { RuleType } from "../types/rule";

interface RuleStoreType {
  rules: RuleType[];
  addRule: (defaultBlockId: string, ruleId: string) => void;
  moveBlockTo: (ruleId: string, blockId: string) => void;
}

export const useRuleStore = create<RuleStoreType>()((set) => ({
  rules: [],
  addRule: (defaultBlockId: string, ruleId: string) => {
    set((state) => ({
      rules: [
        ...state.rules,
        {
          id: ruleId,
          name: "새 규칙",
          description: "새 규칙입니다.",
          children: [defaultBlockId],
        },
      ],
    }));
  },
  moveBlockTo: (ruleId: string, blockId: string) => {
    set((state) => ({
      rules: state.rules.map((rule) => {
        if (rule.id === ruleId) {
          return {
            ...rule,
            children: [...rule.children, blockId],
          };
        } else if (rule.children.includes(blockId)) {
          return {
            ...rule,
            children: rule.children.filter((id) => id !== blockId),
          };
        } else return rule;
      }),
    }));
  },
}));
