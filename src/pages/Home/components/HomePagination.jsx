import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePagination = ({
  currentPage,
  totalPages,
  paginationPages,
  onPageChange,
}) => {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          aria-label="Предыдущая страница"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {paginationPages.map((page, index) =>
            typeof page === 'number' ? (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`min-w-11 h-11 rounded-full px-4 text-sm font-semibold transition cursor-pointer ${
                  currentPage === page
                    ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200'
                    : 'bg-white/90 text-zinc-700 ring-1 ring-zinc-200 hover:bg-sky-50'
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={`${page}-${index}`} className="px-1 text-zinc-400">
                …
              </span>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          aria-label="Следующая страница"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="text-sm text-zinc-500">
        Страница {currentPage} из {totalPages}
      </div>
    </div>
  );
};

export default HomePagination;