import { Search } from 'lucide-react';
import { TripCard } from '../../../components/TripCard';
import HomePagination from './HomePagination';

const TripsContent = ({
  loading,
  error,
  trips,
  favoriteIds,
  onToggleFavorite,
  currentPage,
  totalPages,
  paginationPages,
  onPageChange,
  onResetFilters,
}) => {
  if (loading) {
    return (
      <div className="flex h-72 items-center justify-center rounded-[32px] border border-white/60 bg-white/75 shadow-sm ring-1 ring-white/40 backdrop-blur-sm">
        <span className="animate-pulse font-medium text-zinc-400">
          Поиск лучших предложений...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[32px] border border-red-100 bg-red-50 p-12 text-center text-red-600 shadow-sm">
        Произошла ошибка при загрузке данных.
      </div>
    );
  }

  if (trips.length === 0) {
    return (
      <div className="rounded-[40px] border border-white/60 bg-white/80 py-24 text-center shadow-sm ring-1 ring-white/40 backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50 text-zinc-400">
          <Search className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Ничего не найдено</h3>
        <p className="mt-2 text-zinc-500">
          Попробуйте изменить запрос или сбросить фильтры
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="mt-6 text-sm font-bold text-zinc-900 underline underline-offset-4"
        >
          Сбросить всё
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
            isFavorite={favoriteIds.has(trip.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {totalPages > 1 ? (
        <HomePagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginationPages={paginationPages}
          onPageChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default TripsContent;