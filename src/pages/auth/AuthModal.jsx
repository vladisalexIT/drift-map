import { useEffect, useState } from 'react';
import { X, User, ShieldCheck } from 'lucide-react';
import AuthForm from './AuthForm';
import WelcomeCard from './WelcomeCard';

export default function AuthModal({ isOpen, onClose, user, onAuthSuccess, onLogout }) {
  const [mode, setMode] = useState('login');

  useEffect(() => {
    if (!isOpen) {
      setMode('login');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-sky-950/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(245,251,255,0.96)_0%,rgba(230,244,251,0.96)_45%,rgba(221,240,248,0.96)_100%)] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
        <div className="absolute -left-14 top-8 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative z-10 p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-sky-700">
                <ShieldCheck size={14} />
                Личный кабинет
              </div>

              <h2 className="text-3xl font-black tracking-tight text-zinc-900">
                {user ? 'С возвращением' : 'Вход и регистрация'}
              </h2>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                Минимум формальностей, максимум попыток посмотреть дорогие туры.
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-zinc-200 bg-white/80 text-zinc-600 shadow-sm transition-all hover:bg-white hover:text-zinc-900"
            >
              <X size={20} />
            </button>
          </div>

          {user ? (
            <WelcomeCard user={user} onLogout={onLogout} />
          ) : (
            <>
              <div className="mb-6 inline-flex rounded-2xl border border-sky-100 bg-white/70 p-1 shadow-sm">
                <button
                  onClick={() => setMode('login')}
                  className={`cursor-pointer rounded-[1rem] px-4 py-2.5 text-sm font-bold transition-all ${
                    mode === 'login'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Вход
                </button>

                <button
                  onClick={() => setMode('register')}
                  className={`cursor-pointer rounded-[1rem] px-4 py-2.5 text-sm font-bold transition-all ${
                    mode === 'register'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Регистрация
                </button>
              </div>

              <AuthForm mode={mode} onSuccess={onAuthSuccess} />

              <div className="mt-5 rounded-2xl border border-sky-100 bg-white/60 px-4 py-3 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-sky-600" />
                  Это демо-вход без сервера. Данные просто сохраняются в localStorage.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}