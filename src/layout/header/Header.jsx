import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, User, Map } from 'lucide-react';
import AuthModal from '../../pages/auth/AuthModal';

export const Header = ({ favoritesCount = 0 }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
  if (isAuthOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isAuthOpen]);

  const linkClass = ({ isActive }) =>
    `relative flex items-center gap-2 rounded-full px-4 py-2.5 text-base font-medium transition-all duration-200 max-[840px]:justify-center max-[840px]:px-3 max-[840px]:py-2 ${
      isActive
        ? 'bg-zinc-900 text-white shadow-md shadow-zinc-200'
        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
    }`;

  const handleLogout = () => {
    localStorage.removeItem('mockUser');
    setUser(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[2000px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow-lg shadow-zinc-200 transition group-hover:scale-105">
              ✈
            </div>

            <div className="flex flex-col max-[840px]:block">
              <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.22em] text-zinc-400 sm:text-[12px]">
                DriftMap
              </p>
              <h1 className="text-base font-semibold leading-tight text-zinc-900 sm:text-lg">
                Планировщик путешествий
              </h1>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3">
            <NavLink to="/" className={linkClass}>
              <Map
                className="h-5 w-5 max-[840px]:h-6 max-[840px]:w-6"
                strokeWidth={2.5}
              />
              <span className="max-[840px]:hidden">Направления</span>
            </NavLink>

            <NavLink to="/favorites" className={linkClass}>
              <div className="relative flex items-center gap-2 bg-transparent">
                <Heart
                  className="h-5 w-5 fill-current max-[840px]:h-6 max-[840px]:w-6"
                  strokeWidth={2.5}
                />
                <span className="max-[840px]:hidden">Мои планы</span>

                {favoritesCount > 0 && (
                  <span className="absolute -right-4 -top-4 flex h-6 min-w-[26px] items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white shadow-sm ring-2 ring-white max-[840px]:-right-2.5 max-[840px]:-top-2.5">
                    {favoritesCount}
                  </span>
                )}
              </div>
            </NavLink>

            <button
              onClick={() => setIsAuthOpen(true)}
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 max-[840px]:h-[42px] max-[840px]:w-[42px] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5"
            >
              <User size={20} strokeWidth={2.5} />
              <span className="hidden text-base font-medium sm:block">
                {user ? user.name : 'Войти'}
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={user}
        onAuthSuccess={setUser}
        onLogout={handleLogout}
      />
    </>
  );
};