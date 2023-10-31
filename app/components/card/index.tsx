import { CardDefaultType, DECK_TYPE } from "@/app/types/card";
import { PlayingCardType } from "@/app/types/card/playing";
import { PlayingCardPreview } from "./playing";
import { FruitCardPreview } from "./fruit";
import { FruitCardType } from "@/app/types/card/fruit";

export default function Card({ card }: { card: CardDefaultType }) {
  return (
    <div className="w-12 h-20 bg-white rounded-sm border">
      {card.deck === DECK_TYPE.PLAYING && (
        <PlayingCardPreview card={card as PlayingCardType} />
      )}
      {card.deck === DECK_TYPE.FRUIT && (
        <FruitCardPreview card={card as FruitCardType} />
      )}
    </div>
  );
}
