import { LogOut, Sparkles } from 'lucide-react';

export default function WelcomeCard({ user, onLogout }) {
    return (
        <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(14,165,233,0.25)] ring-1 ring-white/60 backdrop-blur-xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-300/30 blur-2xl" />
            <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

            <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                    <Sparkles size={14} />
                    Успешный вход
                </div>

                <h3 className="mb-2 text-2xl font-black text-zinc-900">
                    Ну здравствуйте, {user?.name} 👀
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                    Вот ну зашли вы, и что? Не по карману вам такие поездочки...
                </p>

                <button
                    onClick={onLogout}
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer"
                >
                    <LogOut size={18} />
                    Выйти
                </button>
            </div>
        </div>
    );
}