import { Link } from 'react-router-dom';
import { SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/40 bg-white/30 backdrop-blur-sm">
      <div className="absolute inset-0">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.78),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.42),transparent_30%)]" />
        <svg
          className="absolute inset-x-0 bottom-0 h-24 w-full opacity-[0.1]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C150,110 300,20 450,64 C600,108 750,18 900,64 C1050,110 1150,34 1200,64 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-sky-950"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[2000px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="group mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow-lg shadow-zinc-200 transition group-hover:scale-105">
                ✈
              </div>
              <div className="hidden sm:block">
                <p className="text-[12px] font-semibold uppercase leading-tight tracking-[0.28em] text-zinc-400">
                  DriftMap
                </p>
                <h1 className="text-base font-semibold text-zinc-900">
                  Планировщик путешествий
                </h1>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-6 text-zinc-600">
              Подбирайте направления, сравнивайте туры и сохраняйте вдохновляющие
              варианты в избранное. Все маршруты проверены экспертами.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
              Навигация
            </h4>
            <div className="space-y-3 text-sm text-zinc-600">
              <Link to="/" className="block transition hover:text-zinc-900">
                Главная
              </Link>
              <Link to="/favorites" className="block transition hover:text-zinc-900">
                Избранное
              </Link>
              <Link to="/about" className="block transition hover:text-zinc-900">
                О сервисе
              </Link>
              <Link to="/contacts" className="block transition hover:text-zinc-900">
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
              Следите за нами
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Youtube"
              >
                <SiYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DriftMap. Все права защищены.</span>
          <span>Собрано для комфортного выбора путешествий.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;