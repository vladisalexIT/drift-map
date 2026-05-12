import {
    Search,
    Sparkles,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Plane,
    Route,
    Compass,
    Clock3,
    Heart,
    ShieldCheck,
    BadgePercent,
    Headphones,
    WalletCards,
} from 'lucide-react';

export default function BackgroundDecorations() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5fbff_0%,#e6f4fb_45%,#ddf0f8_100%)]" />

            <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1440 1200" fill="none">
                <path
                    d="M-40 180 C180 60, 360 300, 580 180 S980 60, 1220 180 S1540 300, 1760 180"
                    stroke="rgba(15,23,42,0.38)"
                    strokeWidth="3"
                    strokeDasharray="14 12"
                    strokeLinecap="round"
                />
                <path
                    d="M120 -20 C260 120, 320 240, 480 340 S780 520, 940 640 S1220 900, 1380 1080"
                    stroke="rgba(15,23,42,0.28)"
                    strokeWidth="3"
                    strokeDasharray="12 14"
                    strokeLinecap="round"
                />
                <path
                    d="M150 980 C300 860, 430 820, 620 860 S980 980, 1220 900"
                    stroke="rgba(15,23,42,0.3)"
                    strokeWidth="3"
                    strokeDasharray="13 11"
                    strokeLinecap="round"
                />
                <path
                    d="M240 120 C420 220, 560 90, 760 170 S1100 260, 1340 140"
                    stroke="rgba(14,165,233,0.32)"
                    strokeWidth="2.5"
                    strokeDasharray="8 10"
                    strokeLinecap="round"
                />
            </svg>

            <div className="absolute left-[8%] top-[14%] rounded-full bg-sky-300/45 p-5 text-sky-900 shadow-[0_10px_30px_rgba(14,165,233,0.25)] ring-1 ring-white/50">
                <Plane size={30} />
            </div>

            <div className="absolute right-[12%] top-[28%] rounded-full bg-white/85 p-5 text-zinc-800 shadow-[0_12px_28px_rgba(15,23,42,0.12)] ring-1 ring-sky-100">
                <MapPin size={30} />
            </div>

            <div className="absolute left-[16%] bottom-[20%] rounded-full bg-cyan-300/40 p-5 text-cyan-950 shadow-[0_10px_30px_rgba(34,211,238,0.22)] ring-1 ring-white/50">
                <Compass size={30} />
            </div>

            <div className="absolute right-[22%] bottom-[24%] rounded-full bg-white/85 p-5 text-zinc-800 shadow-[0_12px_28px_rgba(15,23,42,0.12)] ring-1 ring-sky-100">
                <Route size={30} />
            </div>

            <div className="absolute left-[45%] top-[50%] rounded-full bg-white/80 p-5 text-zinc-800 shadow-[0_12px_28px_rgba(15,23,42,0.12)] ring-1 ring-sky-100">
                <Clock3 size={30} />
            </div>

            <div className="absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-sky-400/35 blur-3xl animate-pulse" />
            <div className="absolute right-[-90px] top-40 h-[34rem] w-[34rem] rounded-full bg-cyan-400/28 blur-3xl animate-pulse [animation-delay:1.2s]" />
            <div className="absolute left-[18%] bottom-[-120px] h-[30rem] w-[30rem] rounded-full bg-teal-300/24 blur-3xl animate-pulse [animation-delay:2.4s]" />
            <div className="absolute right-[36%] top-[58%] h-[18rem] w-[18rem] rounded-full bg-blue-300/20 blur-3xl animate-pulse [animation-delay:3.2s]" />
        </div>
    )
}
