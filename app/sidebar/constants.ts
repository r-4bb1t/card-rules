import { ARG_INPUT_TYPE, BLOCK_TYPE, BlockType } from "./types";

export const BLOCKS: { [key: string]: BlockType } = {
  if: {
    id: "if",
    name: "만약",
    type: BLOCK_TYPE.CONDITION,
    icon: "",
    description: "만약 조건이 참이면 실행합니다.",
    canHaveChildren: true,
    args: [
      {
        id: "arg-1",
        description: "첫 번째 인자",
        types: [ARG_INPUT_TYPE.TEXT, ARG_INPUT_TYPE.child],
      },
      {
        id: "operator",
        description: "aksdir",
        types: [ARG_INPUT_TYPE.SELECT],
        options: ["==", "!="],
      },
      {
        id: "arg-2",
        description: "두 번째 인자",
        types: [ARG_INPUT_TYPE.TEXT, ARG_INPUT_TYPE.child],
      },
    ],
  },
  turn: {
    id: "turn",
    name: "턴",
    type: BLOCK_TYPE.VARIABLE,
    icon: "",
    description: "현재 턴을 나타내는 변수",
    canHaveChildren: false,
    args: [],
  },
};
