import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroTripCard = ({ trip, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_50px_-18px_rgba(0,0,0,0.45)]">
      <Link
        to={`/trip/${trip.id}`}
        className="group relative block aspect-[4/5] w-full overflow-hidden"
      >
        <img
          src={`${import.meta.env.BASE_URL}${trip.image}`}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
          {trip.deadline || 'Популярный тур'}
        </div>

        <div className="absolute left-4 top-[52px] flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur-md">
          <Star size={15} className="fill-orange-400 text-orange-400" />
          {trip.rating}
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onToggleFavorite(trip);
          }}
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

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white/85">
            <MapPin size={15} />
            <span className="font-medium uppercase tracking-wider">{trip.country}</span>

            {trip.type ? (
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
                {trip.type}
              </span>
            ) : null}
          </div>

          <h4 className="text-2xl font-bold leading-tight tracking-tight">
            {trip.title}
          </h4>

          {trip.shortDescription ? (
            <p className="mt-2 line-clamp-2 text-base leading-relaxed text-white/80">
              {trip.shortDescription}
            </p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default HeroTripCard;