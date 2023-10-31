import { PlayingCardType } from "@/app/types/card/playing";
import cc from "classcat";

export const PlayingCardPreview = ({ card }: { card: PlayingCardType }) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-1
      "
    >
      <div className="font-bold text-xs">{card.values.number}</div>
      <div
        className={cc([
          "w-full text-center text-xl",
          (card.values.suit === "diamond" || card.values.suit === "heart") &&
            "text-red-500",
          (card.values.suit === "spade" || card.values.suit === "club") &&
            "text-black",
        ])}
      >
        {card.values.suit === "diamond" && "◆"}
        {card.values.suit === "heart" && "♥"}
        {card.values.suit === "spade" && "♠"}
        {card.values.suit === "club" && "♣"}
      </div>
      <div className="font-bold text-xs w-full text-right">
        {card.values.number}
      </div>
    </div>
  );
};
