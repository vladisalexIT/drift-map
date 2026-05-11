
import React from 'react'

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
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900">
          {trip.type}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-bold text-zinc-900">{trip.title}</h4>
            <p className="mt-1 text-sm text-zinc-500">{trip.country}</p>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-zinc-600">
          {trip.description}
        </p>
      </div>
    </div>
  );
}
