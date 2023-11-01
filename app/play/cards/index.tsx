import Card from "./card";
import { CardType } from "@/app/types/card";

function splitIntoChunk(arr: CardType[], chunk: number) {
  const result: CardType[][] = [];

  for (let index = 0; index < arr.length; index += chunk) {
    let tempArray;
    tempArray = arr.slice(index, index + chunk);
    result.push(tempArray);
  }

  return result.reverse();
}

const getSize = (len: number) => {
  return len < 8 ? "lg" : len < 14 ? "md" : "sm";
};

export default function Cards({ cards }: { cards: CardType[] }) {
  const splicedCards = splitIntoChunk(cards, cards.length > 12 ? 8 : 6);
  return (
    <div className="w-full absolute bottom-0 z-10">
      {splicedCards.map((chunks, i) => (
        <div
          key={i}
          className="w-full flex justify-center"
          style={{
            transform: `translateY(${
              (splicedCards.length - i - 1) *
              (getSize(cards.length) == "lg" ? 80 : 50)
            }px)`,
          }}
        >
          {chunks.map((card, ii) => (
            <Card
              key={card.id}
              rotate={ii - (chunks.length - 1) / 2}
              card={card}
              size={getSize(cards.length)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
