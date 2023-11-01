import { useBlockStore } from "@/app/store";
import { ARG_INPUT_TYPE, ArgType } from "../../../types/block";
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
  arg: ArgType;
}) {
  const { changeArg } = useBlockStore();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: ARG_INPUT_TYPE
  ) => {
    changeArg(blockId, { key: argKey, type, value: e.target.value });
  };

  return (
    <div className="flex gap-1 items-center">
      {arg.acceptType.includes(ARG_INPUT_TYPE.SELECT) ? (
        <select
          className="select select-primary select-sm"
          onChange={(e) => handleChange(e, ARG_INPUT_TYPE.SELECT)}
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
          type={
            arg.acceptType.includes(ARG_INPUT_TYPE.NUMBER) ? "number" : "text"
          }
          className={cc([
            "input input-primary input-sm",
            ruleId.length == 0 ? "w-8" : "w-16",
          ])}
          value={arg.value.value}
          onChange={(e) => handleChange(e, ARG_INPUT_TYPE.TEXT)}
          disabled={ruleId.length == 0}
        />
      )}
      {arg.label}
    </div>
  );
}
