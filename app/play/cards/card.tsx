import CardRender from "@/app/components/card";
import { FruitCardPreview } from "@/app/components/card/fruit";
import { CardType, DECK_TYPE } from "@/app/types/card";
import cc from "classcat";

export default function Card({
  rotate,
  card,
  size,
}: {
  rotate: number;
  card: CardType;
  size: "sm" | "md" | "lg";
}) {
  return (
    <div className="hover:scale-125 hover:-translate-y-12 hover:z-10 transition-all">
      <div
        className={cc([
          "rounded-xl bg-white transition-all origin-bottom border border-gray-400",
          size == "lg" && "w-32 h-48 text-3xl",
          size == "md" && "w-28 h-44 text-[1.8rem]",
          size == "sm" && "w-20 h-40 text-xl",
        ])}
        style={{
          transform: `rotate(${rotate * 5}deg) translateY(${
            rotate * rotate * (size == "lg" ? 10 : 5)
          }px) translateX(${rotate * -10}px)`,
        }}
      >
        <CardRender card={card} />
      </div>
    </div>
  );
}
