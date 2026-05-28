import { MapPin, Search } from 'lucide-react';

const TripsFiltersBar = ({
  search,
  onSearchChange,
  types,
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="relative -mt-12 mb-12 rounded-[32px] border border-white/60 bg-white/78 p-2 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div className="relative flex-[1.35]">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Куда отправимся?"
            className="w-full rounded-[24px] bg-transparent py-3 pl-13 pr-4 text-base font-medium outline-none placeholder:text-zinc-400 sm:py-4 sm:pl-14 sm:pr-5 lg:py-6 lg:pl-16 lg:pr-6 lg:text-lg"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-zinc-100 p-0 lg:border-l lg:border-t-0 lg:p-4">
          <div className="mr-2 hidden items-center gap-2 px-2 text-zinc-400 lg:flex">
            <MapPin size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Тип:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => onTypeChange(type)}
                className={`rounded-full px-5 py-2.5 text-base font-semibold transition-[background-color,color,shadow] duration-200 cursor-pointer ${
                  selectedType === type
                    ? 'bg-zinc-900 text-white shadow-lg shadow-slate-200'
                    : 'text-zinc-500 hover:bg-sky-50 hover:text-zinc-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsFiltersBar;