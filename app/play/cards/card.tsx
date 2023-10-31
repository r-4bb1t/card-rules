export default function Card({ rotate }: { rotate: number }) {
  return (
    <div className="hover:scale-125 hover:-translate-y-5 hover:z-10 transition-all">
      <div
        className="rounded-xl bg-white w-32 h-52 transition-all origin-bottom border border-gray-400"
        style={{
          transform: `rotate(${rotate * 5}deg) translateY(${
            rotate * rotate * 10
          }px) translateX(${rotate * -10}px)`,
        }}
      ></div>
    </div>
  );
}
