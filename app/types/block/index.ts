import { createRandomId } from "@/app/libs/create-random-id";
import { IfArgsType, IfBlockType } from "./if";
import { DrawArgsType, DrawBlockType } from "./draw";
import { GameStartBlockType } from "./game/start";

export type BlockType = IfBlockType | DrawBlockType | GameStartBlockType;

export enum ARG_INPUT_TYPE {
  TEXT = "text",
  SELECT = "select",
  NUMBER = "number",
  VARIABLE = "variable",
}

export enum BLOCK_TYPE {
  IF = "if",
  GAMESTART = "gameStart",
  DRAW = "draw",
}

export enum BLOCK_CATEGORY {
  CONDITION = "condition",
  ACTION = "action",
  VARIABLE = "variable",
}

export const CATEGORY_TYPE = {
  [BLOCK_CATEGORY.CONDITION]: [BLOCK_TYPE.IF, BLOCK_TYPE.GAMESTART],
  [BLOCK_CATEGORY.ACTION]: [BLOCK_TYPE.DRAW],
  [BLOCK_CATEGORY.VARIABLE]: [],
};

export type ArgsType = IfArgsType | DrawArgsType | { [key: string]: ArgType };

export interface ArgType {
  id: string;
  label: string;
  value: {
    type: ARG_INPUT_TYPE;
    value: string;
  };
  acceptType: ARG_INPUT_TYPE[];
  options?: string[];
}

export abstract class BlockDefaultType {
  id: string = createRandomId();
  type!: string;
  category!: BLOCK_CATEGORY;
  name = "만약";
  icon = "";
  ruleId: string = "";
  args: ArgsType = {};
  inner: string[] = [];
}

export type TargetType = "me" | "enemy" | "all";