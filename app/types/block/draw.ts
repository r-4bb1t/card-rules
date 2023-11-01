import { createRandomId } from "@/app/libs/create-random-id";
import {
  ARG_INPUT_TYPE,
  ArgType,
  BLOCK_CATEGORY,
  BLOCK_TYPE,
  BlockDefaultType,
} from ".";

export class DrawBlockType extends BlockDefaultType {
  type = BLOCK_TYPE.DRAW;
  category = BLOCK_CATEGORY.ACTION;
  name = "카드 뽑기";
  icon = "";
  description = "카드를 뽑습니다.";
  acceptInnerCategory = [] as BLOCK_CATEGORY[];
  args: DrawArgsType = new DrawArgsType();
  inner: string[] = [];
}

export class DrawArgsType {
  target: ArgType = {
    id: createRandomId(),
    label: "가",
    value: {
      type: ARG_INPUT_TYPE.SELECT,
      value: "me",
    },
    acceptType: [ARG_INPUT_TYPE.SELECT],
    options: ["me", "enemy", "all"],
  };
  count: ArgType = {
    id: createRandomId(),
    label: "장",
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: "1",
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER, ARG_INPUT_TYPE.VARIABLE],
  };
}
