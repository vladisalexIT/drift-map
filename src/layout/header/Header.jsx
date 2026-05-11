import { Link, NavLink } from 'react-router-dom';

export const Header = ({ favoritesCount = 0 }) => {
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-zinc-900 text-white shadow-sm'
        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-md shadow-zinc-200 transition group-hover:scale-105">
            ✈
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-[0.28em] text-zinc-400">
              DriftMap
            </p>
            <h1 className="text-base font-semibold text-zinc-900">
              Планировщик путешествий
            </h1>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Направления
          </NavLink>
          <NavLink to="/favorites" className={linkClass}>
            Избранное
            {favoritesCount > 0 && (
              <span className="ml-2 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-zinc-900">
                {favoritesCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};