import { PlayingCardType } from "@/app/types/card/playing";
import cc from "classcat";

const getSimbol = (suit: PlayingCardType["values"]["suit"]) => {
  switch (suit) {
    case "diamond":
      return "◆";
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "club":
      return "♣";
  }
};

const getClassName = (suit: PlayingCardType["values"]["suit"]) => {
  switch (suit) {
    case "diamond":
      return "text-red-500";
    case "heart":
      return "text-red-500";
    case "spade":
      return "text-black";
    case "club":
      return "text-black";
  }
};

export const PlayingCardPreview = ({ card }: { card: PlayingCardType }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-[10%] select-none">
      <div className="font-bold text-[1em] font-serif flex justify-start">
        <div className="flex flex-col items-center">
          {card.values.number}
          <div
            className={cc([
              getClassName(card.values.suit),
              "-mt-[0.7em] text-[0.6em]",
            ])}
          >
            {getSimbol(card.values.suit)}
          </div>
        </div>
      </div>
      <div
        className={cc([
          "w-full text-center text-[2em] flex items-center h-4 justify-center",
          getClassName(card.values.suit),
        ])}
      >
        {getSimbol(card.values.suit)}
      </div>
      <div className="font-bold text-[1em] font-serif w-full flex justify-end leading-[-2em] h-fit">
        <div className="text-center flex flex-col items-center">
          <div
            className={cc([
              getClassName(card.values.suit),
              "-mb-[0.7em] text-[0.6em]",
            ])}
          >
            {getSimbol(card.values.suit)}
          </div>
          {card.values.number}
        </div>
      </div>
    </div>
  );
};
