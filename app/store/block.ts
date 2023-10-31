import { ArgDefaultType, BlockType } from "../types/block";
import { DEFAULT_BLOCKS } from "../sidebar/rule-set/constants";
import { createRandomId } from "../libs/create-random-id";
import { create } from "zustand";

interface BlockStoreType {
  blocks: BlockType[];
  changeArg: (blockId: string, newArg: { key: string; value: string }) => void;
  copyBlock: (block: BlockType, ruleId: string) => string;
  addInner: (blockId: string, innerBlockId: string) => void;
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
                ...(block.args[
                  newArg.key as keyof typeof block.args
                ] as ArgDefaultType),
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
  addInner: (blockId: string, innerBlockId: string) => {
    if (blockId === innerBlockId) return;
    set((state) => ({
      ...state,
      blocks: state.blocks.map((block) => {
        if (block.id === innerBlockId) {
          return {
            ...block,
            ruleId: state.blocks.find((b) => b.id === blockId)?.ruleId || "",
          };
        }
        if (block.inner.includes(innerBlockId)) {
          return {
            ...block,
            inner: block.inner.filter((id) => id !== innerBlockId),
          };
        }
        if (block.id === blockId) {
          return {
            ...block,
            inner: [...block.inner, innerBlockId],
          };
        }
        return block;
      }),
    }));
  },
}));
