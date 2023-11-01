import { FruitCardType } from "@/app/types/card/fruit";

const getEmoji = (fruit: FruitCardType["values"]["fruit"]) => {
  switch (fruit) {
    case "apple":
      return "🍎";
    case "banana":
      return "🍌";
    case "orange":
      return "🍊";
    case "grape":
      return "🍇";
    case "peach":
      return "🍑";
  }
};

export const FruitCardPreview = ({ card }: { card: FruitCardType }) => {
  return (
    <div className="w-full h-full flex relative items-center justify-center select-none">
      <div className="text-[0.6em] absolute top-[3%] left-[10%] font-bold">
        {getEmoji(card.values.fruit)} × {card.values.number}
      </div>
      <div className="w-full h-min flex justify-center items-center flex-wrap p-[8%] mt-[12%]">
        {[...new Array(card.values.number)].map((_, i) => (
          <div key={i} className="text-[0.8em]">
            {getEmoji(card.values.fruit)}
          </div>
        ))}
      </div>
    </div>
  );
};
