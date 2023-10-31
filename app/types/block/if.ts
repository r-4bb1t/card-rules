import { createRandomId } from "@/app/libs/create-random-id";
import {
  ARG_INPUT_TYPE,
  BLOCK_CATEGORY,
  BLOCK_TYPE,
  BlockDefaultType,
  BlockType,
} from ".";

export class IfBlockType extends BlockDefaultType {
  type = BLOCK_TYPE.IF;
  category = BLOCK_CATEGORY.CONDITION;
  name = "만약";
  icon = "";
  description = "만약 조건이 참이면 실행합니다.";
  canHaveInner = true;
  args: IfArgsType = new IfArgsType();
  acceptInnerCategory = [BLOCK_CATEGORY.ACTION, BLOCK_CATEGORY.CONDITION];
}

export class IfArgsType {
  A: {
    id: string;
    value: {
      type: ARG_INPUT_TYPE.NUMBER | ARG_INPUT_TYPE.VARIABLE;
      value: string;
    };
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE];
  } = {
    id: createRandomId(),
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: "",
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE],
  };
  operator: {
    id: string;
    value: {
      type: ARG_INPUT_TYPE.SELECT;
      value: string;
    };
    acceptType: [ARG_INPUT_TYPE.SELECT];
    options: ["==", "!=", ">", "<", ">=", "<="];
  } = {
    id: createRandomId(),
    value: {
      type: ARG_INPUT_TYPE.SELECT,
      value: "==",
    },
    acceptType: [ARG_INPUT_TYPE.SELECT],
    options: ["==", "!=", ">", "<", ">=", "<="],
  };
  B: {
    id: string;
    value: {
      type: ARG_INPUT_TYPE.NUMBER | ARG_INPUT_TYPE.VARIABLE;
      value: string;
    };
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE];
  } = {
    id: createRandomId(),
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: "",
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE],
  };
}
