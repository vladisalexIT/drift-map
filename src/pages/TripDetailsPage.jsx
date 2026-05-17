import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Star,
  Clock3,
  Users,
  CalendarDays,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

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

  const trip = useMemo(
    () => trips.find((item) => String(item.id) === id),
    [trips, id]
  );

  const isFavorite = favorites.some((item) => item.id === trip?.id);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 text-center">
        <div>
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-orange-500" />
          <p className="mt-4 text-sm font-medium text-zinc-500">Загрузка тура...</p>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Тур не найден
        </p>
        <h1 className="mt-3 text-3xl font-bold text-zinc-900">
          Такого маршрута у нас нет
        </h1>
        <p className="mt-3 max-w-md text-zinc-500">
          Возможно, ссылка устарела или тур был удалён. Попробуйте вернуться к списку направлений.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Вернуться к турам
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm transition hover:bg-zinc-50 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Назад
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl relative">
          <button
            onClick={() => onToggleFavorite(trip)}
            className={`absolute right-6 top-6 z-20 grid h-12 w-12 place-items-center rounded-full border-2 bg-white transition-all duration-300 cursor-pointer shadow-md ${isFavorite
              ? 'border-rose-200 text-rose-500 hover:bg-rose-50'
              : 'border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50'
              }`}
            aria-label="Добавить в избранное"
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <div className="flex flex-col lg:flex-row">
            <div className="relative min-h-[360px] lg:w-[54%]">
              <img
                src={`${import.meta.env.BASE_URL}${trip.image}`}
                alt={trip.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-zinc-900 shadow-sm">
                  <Sparkles size={13} />
                  {trip.type || 'Авторский тур'}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Star size={13} className="fill-yellow-400 text-yellow-400" />
                  4.9
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                  {trip.country}
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {trip.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Clock3 size={14} />
                    {trip.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <MapPin size={14} />
                    {trip.country}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Users size={14} />
                    Места ограничены
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:w-[46%] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                    Цена за тур
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-4xl font-black tracking-tight text-zinc-900">
                      ${trip.price}
                    </p>
                    <span className="pb-1 text-sm font-medium text-zinc-400">/ ЗА 1 ЧЕЛ.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                  <Clock3 className="h-5 w-5 text-orange-500" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Длительность
                  </p>
                  <p className="mt-1 font-bold text-zinc-900">{trip.duration}</p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Локация
                  </p>
                  <p className="mt-1 font-bold text-zinc-900">{trip.country}</p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                  <CalendarDays className="h-5 w-5 text-orange-500" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Старт
                  </p>
                  <p className="mt-1 font-bold text-zinc-900">{trip.deadline || 'По запросу'}</p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white shadow-sm">
                <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-400" />

                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-orange-500" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
                      Почему этот тур выбирают
                    </h3>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                        1
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-600">
                        Маршрут построен так, чтобы меньше времени проводить в дороге и больше — на локациях.
                      </p>
                    </div>

                    <div className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                        2
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-600">
                        Продуманная логистика, комфортные остановки и понятная программа без лишней суеты.
                      </p>
                    </div>

                    <div className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                        3
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-600">
                        Подходит для тех, кто хочет получить яркие впечатления в удобном и понятном формате.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
                  О путешествии
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  {trip.description}
                </p>
              </div>



              <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="flex-1 cursor-pointer rounded-2xl bg-zinc-900 px-8 py-4 text-center font-bold text-white transition-colors duration-200 hover:bg-orange-600">
                    Забронировать
                  </button>
                  <button className="cursor-pointer rounded-2xl border border-zinc-200 bg-white px-8 py-4 text-center font-bold text-zinc-700 transition hover:bg-zinc-50">
                    Скачать программу
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck size={14} className="text-orange-500" />
                    Безопасное бронирование
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users size={14} className="text-orange-500" />
                    Поддержка перед поездкой
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};