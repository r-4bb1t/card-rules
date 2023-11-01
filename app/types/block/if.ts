import { createRandomId } from "@/app/libs/create-random-id";
import {
  ARG_INPUT_TYPE,
  ArgType,
  BLOCK_CATEGORY,
  BLOCK_TYPE,
  BlockDefaultType,
} from ".";

export class IfBlockType extends BlockDefaultType {
  type = BLOCK_TYPE.IF;
  category = BLOCK_CATEGORY.CONDITION;
  name = "만약";
  icon = "";
  description = "만약 조건이 참이면 실행합니다.";
  args: IfArgsType = new IfArgsType();
  acceptInnerCategory = [BLOCK_CATEGORY.ACTION, BLOCK_CATEGORY.CONDITION];
  inner: string[] = [];
}

export class IfArgsType {
  A: ArgType = {
    id: createRandomId(),
    label: "",
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: "",
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE],
  };
  operator: ArgType = {
    id: createRandomId(),
    label: "",
    value: {
      type: ARG_INPUT_TYPE.SELECT,
      value: "==",
    },
    acceptType: [ARG_INPUT_TYPE.SELECT],
    options: ["==", "!=", ">", "<", ">=", "<="],
  };
  B: ArgType = {
    id: createRandomId(),
    label: "",
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: "",
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE],
  };
}
