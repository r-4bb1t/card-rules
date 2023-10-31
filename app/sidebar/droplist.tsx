import { useDrop } from "react-dnd";
import { BLOCKS } from "./constants";

export default function DropList() {
  const [collectedProps, drop] = useDrop(() => ({
    accept: Object.values(BLOCKS).map((block) => block.id),
    drop: () => alert("dropped"),
  }));
  return <div className="w-full h-full bg-gray-50" ref={drop}></div>;
}
