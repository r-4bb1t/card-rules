import {
  ARG_INPUT_TYPE,
  ArgType,
  ArgsType,
  BlockDefaultType,
  BlockType,
} from "../types/block";
import { DEFAULT_BLOCKS } from "@/app/constants/default-blocks";
import { createRandomId } from "@/app/libs/create-random-id";
import { create } from "zustand";

interface BlockStoreType {
  blocks: BlockType[];
  changeArg: (
    blockId: string,
    newArg: { key: string; type: ARG_INPUT_TYPE; value: string }
  ) => void;
  copyBlock: (block: BlockType, ruleId: string) => string;
  addInner: (blockId: string, innerBlockId: string) => void;
}

export const useBlockStore = create<BlockStoreType>()((set) => ({
  blocks: DEFAULT_BLOCKS,
  changeArg: (
    blockId: string,
    newArg: { key: string; type: ARG_INPUT_TYPE; value: string }
  ) => {
    set((state) => ({
      blocks: state.blocks.map((block) => {
        if (block.id === blockId) {
          return {
            ...block,
            args: {
              ...block.args,
              [newArg.key]: {
                ...(block.args[newArg.key as keyof ArgsType] as ArgType),
                value: {
                  type: newArg.type,
                  value: newArg.value,
                },
              } as ArgType,
            },
          };
        } else return block;
      }),
    }));
  },
  copyBlock: (block: BlockType, ruleId: string) => {
    const newId = createRandomId();
    const newBlock = {
      ...block,
      id: newId,
      ruleId,
      args: { ...block.args },
    } as BlockType;
    // newBlock.changeArg.bind(newBlock);
    set((state) => ({
      blocks: [...state.blocks, newBlock],
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
      }) as BlockType[],
    }));
  },
}));
