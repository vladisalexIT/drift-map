import { Link } from 'react-router-dom';
import { Compass, MoveLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      {/* Мягкий фон (как на главной) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/50 blur-[100px]" />
      </div>

      <div className="relative">
        <Compass size={120} className="mx-auto mb-8 animate-spin-slow text-orange-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl font-black tracking-tighter text-zinc-900/10">404</span>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">
        Маршрут не найден
      </h1>
      <p className="mb-10 max-w-md text-zinc-500">
        Похоже, вы забрели в неизведанные края. Этой страницы не существует, 
        но в мире ещё полно прекрасных мест!
      </p>

      <Link
        to="/"
        className="group flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
      >
        <MoveLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        Вернуться к экспедициям
      </Link>
    </div>
  );
};