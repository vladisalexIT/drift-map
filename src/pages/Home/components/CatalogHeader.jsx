const CatalogHeader = ({
  title,
  total,
  sortBy,
  onSortChange,
  dateFilter,
  onDateFilterChange,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">{title}</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Найдено {total} вариантов для вашего отдыха
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-2xl bg-white/50 p-1 shadow-sm ring-1 ring-zinc-200">
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="cursor-pointer bg-transparent px-3 py-1.5 text-sm font-bold text-zinc-600 outline-none"
          >
            <option value="price-asc">Сначала дешевле</option>
            <option value="price-desc">Сначала дороже</option>
            <option value="duration">Дольше по времени</option>
          </select>
        </div>

        <div className="flex items-center rounded-2xl bg-white/50 p-1 shadow-sm ring-1 ring-zinc-200">
          <select
            value={dateFilter}
            onChange={(event) => onDateFilterChange(event.target.value)}
            className="cursor-pointer bg-transparent px-3 py-1.5 text-sm font-bold text-zinc-600 outline-none"
          >
            <option value="all">Все даты</option>
            <option value="soon">Ближайшие</option>
            <option value="may-june">Май — Июнь</option>
            <option value="july-august">Июль — Август</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CatalogHeader;