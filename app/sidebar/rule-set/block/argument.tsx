import { useBlockStore } from "@/app/store";
import { ARG_INPUT_TYPE, ArgDefaultType } from "../../../types/block";
import { ChangeEvent } from "react";
import cc from "classcat";

export default function Argument({
  ruleId,
  blockId,
  argKey,
  arg,
}: {
  ruleId: string;
  blockId: string;
  argKey: string;
  arg: ArgDefaultType;
}) {
  const { changeArg } = useBlockStore();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    changeArg(blockId, { key: argKey, value: e.target.value });
  };

  return arg.acceptType.includes(ARG_INPUT_TYPE.SELECT) ? (
    <select
      className="select select-primary select-sm"
      onChange={handleChange}
      disabled={ruleId.length == 0}
      value={arg.value.value}
    >
      {arg.options!.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ) : (
    <input
      type={arg.acceptType.includes(ARG_INPUT_TYPE.NUMBER) ? "number" : "text"}
      className={cc([
        "input input-primary input-sm",
        ruleId.length == 0 ? "w-8" : "w-16",
      ])}
      value={arg.value.value}
      onChange={handleChange}
      disabled={ruleId.length == 0}
    />
  );
}
