
import React from 'react'

import React from 'react';
import { Star } from 'lucide-react';

export default function HeroTripCard({ trip }) {
  return (
    <div className="overflow-hidden rounded-[22px] bg-white shadow-2xl">
      <div className="relative h-40">
        <img
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-zinc-900">
          {trip.type}
        </div>

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur-md">
          <Star size={14} className="fill-orange-400 text-orange-400" />
          {trip.rating}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-bold text-zinc-900">{trip.title}</h4>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-zinc-400">
              {trip.country}
            </p>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-base text-zinc-600 leading-relaxed">
          {trip.description}
        </p>
      </div>
    </div>
  );
}
