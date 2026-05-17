import { Link } from 'react-router-dom';
import { Heart, MapPin, Calendar, Star, Clock } from 'lucide-react';

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\.\//, '')}`;
};

export const TripCard = ({ trip, isFavorite, onToggleFavorite }) => {
  const handleAction = (e, callback) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };

  return (
    <Link
      to={`/trip/${trip.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
    >
      {/* Изображение и бейджи */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(trip.image)}
          alt={trip.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        
        {/* Градиент поверх фото для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Рейтинг слева сверху */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur-md">
          <Star size={15} className="fill-orange-400 text-orange-400" />
          {trip.rating}
        </div>

        {/* Бейдж типа тура справа снизу на фото */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {trip.type}
          </span>
        </div>

        {/* Кнопка в избранное */}
        <button
          onClick={(e) => handleAction(e, () => onToggleFavorite(trip))}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full transition-all duration-300 backdrop-blur-md ${
            isFavorite
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/90 text-zinc-900 hover:bg-white hover:scale-110'
          }`}
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-current' : 'text-zinc-900'}
          />
        </button>
      </div>

      {/* Контентная часть */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1 text-zinc-400">
          <MapPin size={15} />
          <span className="text-sm font-medium uppercase tracking-wider">{trip.country}</span>
        </div>

        <h3 className="text-xl font-bold leading-tight text-zinc-900 group-hover:text-orange-600 transition-colors">
          {trip.title}
        </h3>
        
        <p className="mt-2 line-clamp-2 text-base text-zinc-500 leading-relaxed">
          {trip.description}
        </p>

        {/* Характеристики */}
        <div className="mt-5 grid grid-cols-2 gap-4 border-y border-zinc-100 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-zinc-100 p-1.5 text-zinc-600">
              <Clock size={15} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Срок</p>
              <p className="text-sm font-bold text-zinc-900">{trip.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-zinc-100 p-1.5 text-zinc-600">
              <Calendar size={15} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Старт</p>
              <p className="text-sm font-bold text-zinc-900">{trip.deadline}</p>
            </div>
          </div>
        </div>

        {/* Цена и кнопка */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">Цена за чел.</p>
            <p className="text-2xl font-black text-zinc-900">
              ${trip.price}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-orange-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-700 active:scale-95">
              Подробнее
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};