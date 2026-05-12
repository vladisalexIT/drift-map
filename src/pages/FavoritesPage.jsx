import { Link } from 'react-router-dom';
import { TripCard } from '../components/TripCard';
import BackgroundDecorations from '../components/BackgroundDecorations';

export const FavoritesPage = ({ favorites = [], onToggleFavorite, onClearFavorites }) => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundDecorations />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Saved trips</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
              Избранные направления
            </h2>
            <p className="mt-3 text-zinc-600">
              Ваша персональная коллекция мест для будущих открытий и ярких впечатлений.
            </p>
          </div>

          {favorites.length > 0 && (
            <button
              onClick={() => {onClearFavorites()}}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/50 px-4 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-red-50 hover:text-red-600 hover:border-red-100 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Очистить список
            </button>
          )}
        </div>

        {favorites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {favorites.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-200 bg-white/80 px-6 py-20 text-center shadow-sm backdrop-blur-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-50 text-4xl text-zinc-300">
              ♡
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900">
              Здесь пока ничего нет
            </h3>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-zinc-500">
              Добавляйте сюда понравившиеся туры, чтобы не упустить важное и спланировать идеальный отдых.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 hover:shadow-lg active:scale-95"
            >
              Смотреть направления
            </Link>
          </div>
        )}
      </div>

      <div className="h-20" />
    </main>
  );
};