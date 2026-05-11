import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
};

export const TripDetailsPage = ({ favorites = [], onToggleFavorite }) => {
  const { id } = useParams();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}mock/data.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки JSON:', err);
        setLoading(false);
      });
  }, []);

  const trip = trips.find((item) => String(item.id) === id);
  const isFavorite = favorites.some((item) => item.id === trip?.id);

  if (loading) {
    return (
      <div className="py-20 text-center text-zinc-500">
        Загрузка...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-4 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">Тур не найден</h2>
        <Link to="/" className="mt-4 inline-block text-zinc-600 hover:text-zinc-900">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm transition hover:bg-zinc-50"
      >
        ← Назад
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
        <div className="flex p-[2rem]">
          <div className="relative min-h-[360px] lg:min-h-full">
            <img
              src={`${import.meta.env.BASE_URL}${trip.image}`}
              alt={trip.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                {trip.type}
              </span>
              <span className="rounded-full bg-zinc-900/85 px-3 py-1 text-xs font-semibold text-white">
                {trip.country}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                Travel details
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {trip.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">Стоимость</p>
                <p className="mt-1 text-3xl font-bold text-zinc-900">${trip.price}</p>
              </div>

              <button
                onClick={() => onToggleFavorite(trip)}
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
              >
                {isFavorite ? 'Убрать из избранного' : 'В избранное'}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs text-zinc-500">Длительность</p>
                <p className="mt-1 font-semibold text-zinc-900">{trip.duration}</p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs text-zinc-500">Тип отдыха</p>
                <p className="mt-1 font-semibold text-zinc-900">{trip.type}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-zinc-900">Описание</h3>
              <p className="mt-3 leading-7 text-zinc-600">{trip.description}</p>
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-5">
              <h3 className="text-lg font-semibold text-zinc-900">Почему это направление удобно</h3>
              <div className="mt-4 space-y-3 text-sm text-zinc-700">
                <p>Подходит для быстрого выбора поездки без долгого сравнения.</p>
                <p>Легко сохраняется в избранное и возвращается позже.</p>
                <p>Страница даёт все ключевые детали в одном экране.</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 rounded-2xl bg-zinc-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800">
                Забронировать
              </button>
              <Link
                to="/favorites"
                className="rounded-2xl border border-zinc-200 px-5 py-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
              >
                В избранное
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};