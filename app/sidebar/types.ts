export interface BlockType {
  id: string;
  type: BLOCK_TYPE;
  name: string;
  icon: string;
  description: string;
  canHaveChildren: boolean;
  args: ArgType[];
}

export enum ARG_INPUT_TYPE {
  TEXT = "text",
  SELECT = "select",
  NUMBER = "number",
  child = "child",
}

export interface ArgType {
  id: string;
  description: string;
  types: ARG_INPUT_TYPE[];
  options?: string[];
}

export enum BLOCK_TYPE {
  CONDITION = "condition",
  ACTION = "action",
  VARIABLE = "variable",
}
