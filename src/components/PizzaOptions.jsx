const typeNames = ["тонкое", "традиционное"];
const sizeNames = ["26 см.", "30 см.", "40 см."];

export default function PizzaOptions({
  activeType,
  activeSize,
  setActiveType,
  setActiveSize,
}) {
  return (
    <div className="rounded-xl bg-white p-2 shadow-sm">
      <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-[#f4f4f4] text-[11px] font-semibold text-[#7a7a7a]">
        {typeNames.map((type, idx) => (
          <button
            key={type}
            onClick={() => setActiveType(idx)}
            className={`flex h-8 cursor-pointer items-center justify-center transition ${
              activeType === idx ? "rounded-lg bg-white text-black shadow-sm" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1 text-center text-sm font-semibold">
        {sizeNames.map((size, idx) => (
          <button
            key={size}
            type="button"
            onClick={() => setActiveSize(idx)}
            className={`cursor-pointer rounded-md px-1 py-2 transition ${
              activeSize === idx
                ? "bg-[#1f1f1f] text-white"
                : "bg-[#f6f2e8] text-[#8a8a8a] hover:bg-[#efe8d8]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}