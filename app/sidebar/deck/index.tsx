import CardList from "./card-list";
import SelectDeck from "./select-deck";

export default function Deck() {
  return (
    <div className="w-full">
      <SelectDeck />
      <CardList />
    </div>
  );
}
