import { createRandomId } from "@/app/libs/create-random-id";
import { IfArgsType, IfBlockType } from "./if";
import { MoveArgsType, MoveBlockType } from "./move";

export type BlockType = IfBlockType | MoveBlockType;

export enum ARG_INPUT_TYPE {
  TEXT = "text",
  SELECT = "select",
  NUMBER = "number",
  VARIABLE = "variable",
}

export enum BLOCK_TYPE {
  IF = "if",
  MOVE = "move",
}

export enum BLOCK_CATEGORY {
  CONDITION = "condition",
  ACTION = "action",
  VARIABLE = "variable",
}

export type ArgsType = IfArgsType | MoveArgsType;

export interface ArgDefaultType {
  id: string;
  value: {
    type: ARG_INPUT_TYPE;
    value: string;
  };
  acceptType: ARG_INPUT_TYPE[];
  options?: string[];
}

export class BlockDefaultType {
  id: string = createRandomId();
  ruleId: string = "";
}
