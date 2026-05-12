import { Link } from 'react-router-dom';
import { TripCard } from '../components/TripCard';
import BackgroundDecorations from '../components/BackgroundDecorations';

export const FavoritesPage = ({ favorites = [], onToggleFavorite }) => {
  return (
    
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <BackgroundDecorations />
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
        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-16 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Избранное пока пустое</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Добавь понравившиеся направления, чтобы собрать свою подборку поездок.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
          >
            Перейти к направлениям
          </Link>
        </div>
      )}
    </main>
  );
};