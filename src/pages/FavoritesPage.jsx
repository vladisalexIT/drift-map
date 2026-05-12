import { Link } from 'react-router-dom';
import { TripCard } from '../components/TripCard';
import BackgroundDecorations from '../components/BackgroundDecorations';

export const FavoritesPage = ({ favorites = [], onToggleFavorite }) => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Фон на всю страницу */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundDecorations />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Saved trips</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
            Избранные направления
          </h2>
          <p className="mt-3 text-zinc-600">
            Сюда попадают поездки, которые хочется сохранить и вернуться к ним позже.
          </p>
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
          <div className="rounded-3xl border border-zinc-200 bg-white/80 px-6 py-16 text-center shadow-sm backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100/80 text-3xl">
              ♡
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900">
              Пока ничего не добавлено
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Сохраняй понравившиеся направления в избранное, чтобы быстро вернуться к ним позже
              и собрать свой план поездки.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Смотреть направления
            </Link>
          </div>
        )}
      </div>

      {/* Нижний отступ страницы, чтобы при длинном списке был комфортный край */}
      <div className="h-20" />
    </main>
  );
};