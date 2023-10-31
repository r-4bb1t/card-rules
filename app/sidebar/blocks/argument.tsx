import { ARG_INPUT_TYPE, ArgType } from "../types";

export default function Argument({ arg }: { arg: ArgType }) {
  return arg.types.includes(ARG_INPUT_TYPE.SELECT) ? (
    <select className="select select-primary select-sm">
      {arg.options!.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ) : (
    <input
      type={arg.types.includes(ARG_INPUT_TYPE.NUMBER) ? "number" : "text"}
      className="input input-primary input-sm w-8"
    />
  );
}
