import { Link, NavLink } from 'react-router-dom';
import { Heart, User, Map } from 'lucide-react';

export const Header = ({ favoritesCount = 0 }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-3 py-2.5 text-base font-medium transition-all duration-200 max-[840px]:justify-center max-[840px]:px-2 max-[840px]:py-2 ${isActive
      ? 'bg-zinc-900 text-white shadow-md'
      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow-lg shadow-zinc-200 transition group-hover:scale-105">
            ✈
          </div>

          <div className="flex flex-col max-[840px]:block">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-zinc-400 leading-tight font-semibold">
              DriftMap
            </p>
            <h1 className="text-base sm:text-lg font-semibold text-zinc-900 leading-tight">
              Планировщик путешествий
            </h1>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <NavLink to="/" className={linkClass}>
            <Map
              className="w-5 h-5 min-[841px]:w-5 min-[841px]:h-5 max-[840px]:w-6 max-[840px]:h-6"
              strokeWidth={2.5}
            />
            <span className="max-[840px]:hidden">Направления</span>
          </NavLink>

          <NavLink to="/favorites" className={linkClass}>
            <div className="relative flex items-center gap-2 bg-transparent">
              <Heart
                className={`w-5 h-5 min-[841px]:w-5 min-[841px]:h-5 max-[840px]:w-6 max-[840px]:h-6 ${favoritesCount > 0 ? 'fill-current' : ''
                  }`}
                strokeWidth={2.5}
              />
              <span className="max-[840px]:hidden">Мои планы</span>

              {favoritesCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow-sm ring-2 ring-white max-[840px]:-right-2 max-[840px]:-top-2 max-[840px]:h-5 max-[840px]:min-w-[20px]">
                  {favoritesCount}
                </span>
              )}
            </div>
          </NavLink>

          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer max-[840px]:h-[42px] max-[840px]:w-[42px] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5 sm:rounded-2xl">
            <User size={20} strokeWidth={2.5} />
            <span className="hidden sm:block text-base font-medium">Войти</span>
          </button>
        </nav>
      </div>
    </header>
  );
};