import Card from "./card";

export default function Cards() {
  return (
    <div className="w-full flex justify-center translate-y-8">
      {[...new Array(5)].map((_, i) => (
        <Card key={i} rotate={i - 2} />
      ))}
    </div>
  );
}
