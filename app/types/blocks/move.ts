import { createRandomId } from "@/app/libs/create-random-id";
import {
  ARG_INPUT_TYPE,
  BLOCK_CATEGORY,
  BLOCK_TYPE,
  BlockDefaultType,
  BlockType,
} from ".";

export class MoveBlockType extends BlockDefaultType {
  type = BLOCK_TYPE.MOVE;
  category = BLOCK_CATEGORY.ACTION;
  name = "이동";
  icon = "";
  description = "플레이어를 이동시킵니다.";
  canHaveInner = false;
  args: MoveArgsType = new MoveArgsType();
}

export class MoveArgsType {
  axis: {
    id: string;
    value: {
      type: ARG_INPUT_TYPE.SELECT;
      value: string;
    };
    acceptType: [ARG_INPUT_TYPE.SELECT];
    options: ["X", "Y"];
  } = {
    id: createRandomId(),
    value: {
      type: ARG_INPUT_TYPE.SELECT,
      value: "X",
    },
    acceptType: [ARG_INPUT_TYPE.SELECT],
    options: ["X", "Y"],
  };
  value: {
    id: string;
    value: {
      type: ARG_INPUT_TYPE.NUMBER;
      value: number;
    };
    acceptType: [ARG_INPUT_TYPE.NUMBER];
  } = {
    id: createRandomId(),
    value: {
      type: ARG_INPUT_TYPE.NUMBER,
      value: 5,
    },
    acceptType: [ARG_INPUT_TYPE.NUMBER],
  };
}
