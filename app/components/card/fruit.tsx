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
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-min flex justify-center items-center flex-wrap p-1">
        {[...new Array(card.values.number)].map((_, i) => (
          <div key={i} className="text-xs">
            {getEmoji(card.values.fruit)}
          </div>
        ))}
      </div>
    </div>
  );
};
