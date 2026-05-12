import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';


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

  if (loading) return <div className="py-20 text-center text-zinc-500">Загрузка...</div>;
  if (!trip) return <div className="py-20 text-center">Тур не найден</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 pt-2 pb-12 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm transition hover:bg-zinc-50"
        >
          ← Назад
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative min-h-[300px] lg:w-1/2">
              <img
                src={`${import.meta.env.BASE_URL}${trip.image}`}
                alt={trip.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-zinc-900">
                  {trip.type}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  {trip.title}
                </h1>
                <p className="mt-1 text-white/80">{trip.country}</p>
              </div>
            </div>

            <div className="flex flex-col p-8 lg:w-1/2 lg:p-12">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Цена за тур</p>
                  <p className="mt-1 text-4xl font-black text-zinc-900">${trip.price}</p>
                </div>

                <button
                  onClick={() => onToggleFavorite(trip)}
                  className={`cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border transition-all ${isFavorite
                      ? 'border-rose-100 bg-rose-50 text-rose-500 shadow-sm'
                      : 'border-zinc-200 bg-white text-zinc-400 hover:border-zinc-300 hover:text-zinc-600'
                    }`}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
                  <p className="text-xs font-bold text-zinc-400 uppercase">Длительность</p>
                  <p className="mt-1 font-bold text-zinc-900">{trip.duration}</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
                  <p className="text-xs font-bold text-zinc-400 uppercase">Локация</p>
                  <p className="mt-1 font-bold text-zinc-900">{trip.country}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">О путешествии</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{trip.description}</p>
              </div>

              <div className="mt-8 rounded-3xl bg-amber-50/50 border border-amber-100 p-6">
                <h3 className="text-base font-bold text-amber-900">Особенности маршрута</h3>
                <div className="mt-4 space-y-4 text-sm text-amber-900/80">
                  <div className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-[10px] font-bold">1</span>
                    <p>Локации расположены близко друг к другу: вы проведете меньше времени в дороге и больше — наслаждаясь видами.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-[10px] font-bold">2</span>
                    <p>Развитая инфраструктура по всему пути следования: комфортные стоянки, связь и проверенные точки питания.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-[10px] font-bold">3</span>
                    <p>Оптимальный климат: данный регион в этот период предлагает самую мягкую погоду без палящего солнца или затяжных дождей.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <button className="flex-1 cursor-pointer rounded-2xl bg-zinc-900 px-8 py-4 text-center font-bold text-white transition-colors duration-200 hover:bg-orange-600">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};