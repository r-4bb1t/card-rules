import { createRandomId } from "@/app/libs/create-random-id";
import {
  ARG_INPUT_TYPE,
  ArgDefaultType,
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

  getValue: Function = (value: ArgDefaultType["value"]) => {
    if (value.type === ARG_INPUT_TYPE.NUMBER) {
      return Number(value.value);
    } else if (value.type === ARG_INPUT_TYPE.VARIABLE) {
      //return variable value
    }
  };
  action: Function = () => {
    switch (this.args.operator.value.value) {
      case "==":
        return (
          this.getValue(this.args.A.value) === this.getValue(this.args.B.value)
        );
      case "!=":
        return (
          this.getValue(this.args.A.value) !== this.getValue(this.args.B.value)
        );
      case ">":
        return (
          this.getValue(this.args.A.value) > this.getValue(this.args.B.value)
        );
      case "<":
        return (
          this.getValue(this.args.A.value) < this.getValue(this.args.B.value)
        );
      case ">=":
        return (
          this.getValue(this.args.A.value) >= this.getValue(this.args.B.value)
        );
      case "<=":
        return (
          this.getValue(this.args.A.value) <= this.getValue(this.args.B.value)
        );
    }
  };
  act: Function = () => this.action();
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
