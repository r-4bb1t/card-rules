import { CardDefaultType, DECK_TYPE } from "@/app/types/card";
import { PlayingCardType } from "@/app/types/card/playing";
import { PlayingCardPreview } from "./playing";
import { FruitCardPreview } from "./fruit";
import { FruitCardType } from "@/app/types/card/fruit";

export default function CardRender({ card }: { card: CardDefaultType }) {
  return (
    <div className="w-full h-full">
      {card.deck === DECK_TYPE.PLAYING && (
        <PlayingCardPreview card={card as PlayingCardType} />
      )}
      {card.deck === DECK_TYPE.FRUIT && (
        <FruitCardPreview card={card as FruitCardType} />
      )}
    </div>
  );
}
