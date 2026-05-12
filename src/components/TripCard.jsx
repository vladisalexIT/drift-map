import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
};

export const TripCard = ({ trip, isFavorite, onToggleFavorite }) => {
  
  // Функция для обработки клика по кнопкам (чтобы не срабатывал переход по Link)
  const handleAction = (e, callback) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    e.stopPropagation(); // Останавливаем всплытие события к родителю-Link
    callback();
  };

  return (
    <Link 
      to={`/trip/${trip.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-200/50"
    >
      {/* Изображение */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(trip.image)}
          alt={trip.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Бейджи */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-900 backdrop-blur-md">
            {trip.type}
          </span>
          <span className="rounded-full bg-zinc-900/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {trip.country}
          </span>
        </div>

        {/* Кнопка Лайка сверху */}
        <button
          onClick={(e) => handleAction(e, () => onToggleFavorite(trip))}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full transition-all duration-300 backdrop-blur-md ${
            isFavorite 
              ? 'bg-orange-300 text-white shadow-lg' 
              : 'bg-white/90 text-zinc-900 hover:bg-white'
          }`}
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-zinc-900'}
          />
        </button>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
            {trip.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-500">
            {trip.description}
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-400">Длительность</p>
            <p className="text-sm font-semibold text-zinc-900">{trip.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-400">Цена</p>
            <p className="text-xl font-black text-zinc-900">${trip.price}</p>
          </div>
        </div>

        {/* Кнопки внизу */}
        <div className="mt-6 flex gap-2">
          <div className="flex-1 rounded-2xl bg-zinc-900 px-4 py-3.5 text-center text-sm font-bold text-white transition group-hover:bg-orange-600">
            Подробнее
          </div>
          <button
            onClick={(e) => handleAction(e, () => onToggleFavorite(trip))}
            className={`rounded-2xl border px-4 py-3.5 text-sm font-bold transition-colors ${
              isFavorite 
                ? 'border-orange-100 bg-orange-50 text-orange-600' 
                : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            {isFavorite ? 'Убрать' : 'В избранное'}
          </button>
        </div>
      </div>
    </Link>
  );
};