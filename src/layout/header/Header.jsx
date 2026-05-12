import { Link, NavLink } from 'react-router-dom';
import { Heart, User, Map } from 'lucide-react';

export const Header = ({ favoritesCount = 0 }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-2xl px-4 py-2.5 text-base font-medium transition-all duration-200 ${
      isActive
        ? 'bg-zinc-900 text-white shadow-sm'
        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow-lg shadow-zinc-200 transition group-hover:scale-105">
            ✈
          </div>
          <div className="hidden sm:block">
            <p className="text-[12px] uppercase tracking-[0.28em] text-zinc-400 leading-tight font-semibold">
              DriftMap
            </p>
            <h1 className="text-base font-semibold text-zinc-900">
              Планировщик путешествий
            </h1>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <NavLink to="/" className={linkClass}>
            <Map size={20} strokeWidth={2} />
            <span>Направления</span>
          </NavLink>

          <NavLink to="/favorites" className={linkClass}>
            <div className="flex items-center gap-2 border-none p-0 bg-transparent">
              <Heart size={20} strokeWidth={2} />
              <div className="relative">
                <span>Мои планы</span>
                {favoritesCount > 0 && (
                  <span className="absolute -right-4 -top-4 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-bold leading-none text-white shadow-sm">
                    {favoritesCount}
                  </span>
                )}
              </div>
            </div>
          </NavLink>

          <button className="cursor-pointer flex items-center gap-2 rounded-2xl px-4 py-2.5 text-base font-medium text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-900">
            <User size={20} strokeWidth={2} />
            <span>Войти</span>
          </button>
        </nav>
      </div>
    </header>
  );
};