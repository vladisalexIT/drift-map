import { useEffect, useMemo, useState } from "react";
import { getTopMovies } from "../lib/api";

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

export default function MovieSidePosters() {
    const [movies, setMovies] = useState([]);
    const [leftPoster, setLeftPoster] = useState(null);
    const [rightPoster, setRightPoster] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const [offsetY, setOffsetY] = useState(160);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getTopMovies(controller.signal, 1);
                const items = data.items || [];
                setMovies(items);
            } catch (error) {
                console.error("Не удалось загрузить фоновые постеры", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
        return () => controller.abort();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const posterHeight = 450;
            const initialTop = 160;
            const gap = 100;
            
            const footer = document.querySelector('footer');
            const footerTop = footer ? footer.offsetTop : document.documentElement.scrollHeight;
            
            let targetY = initialTop + scrollY;
            
            if (targetY + posterHeight + gap > footerTop) {
                targetY = footerTop - posterHeight - gap;
            }

            setOffsetY(targetY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    const pickPosters = useMemo(() => {
        if (!movies.length) return { left: null, right: null };
        const filtered = movies.filter(m => m.posterUrlPreview || m.posterUrl);
        const shuffled = shuffleArray(filtered);
        return { left: shuffled[0] || null, right: shuffled[1] || null };
    }, [movies]);

    useEffect(() => {
        if (!pickPosters.left && !pickPosters.right) return;
        setLeftPoster(pickPosters.left);
        setRightPoster(pickPosters.right);
        setVisible(true);
    }, [pickPosters]);

    useEffect(() => {
        if (!movies.length) return;
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                const filtered = movies.filter(m => m.posterUrlPreview || m.posterUrl);
                const shuffled = shuffleArray(filtered);
                setLeftPoster(shuffled[0] || null);
                setRightPoster(shuffled[1] || null);
                setVisible(true);
            }, 800);
        }, 8000);
        return () => clearInterval(interval);
    }, [movies]);

    if (loading || (!leftPoster && !rightPoster)) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-0 hidden 2xl:block">
            <div
                className="absolute transition-all duration-700 ease-out"
                style={{ 
                    top: `${offsetY}px`,
                    left: 'calc(50% - 720px - 150px - 40px)' 
                }}
            >
                {leftPoster && <PosterCard movie={leftPoster} visible={visible} />}
            </div>

            <div
                className="absolute transition-all duration-700 ease-out"
                style={{ 
                    top: `${offsetY}px`,
                    right: 'calc(50% - 720px - 150px - 40px)' 
                }}
            >
                {rightPoster && <PosterCard movie={rightPoster} visible={visible} />}
            </div>
        </div>
    );
}

function PosterCard({ movie, visible }) {
    const poster = movie.posterUrl || movie.posterUrlPreview;
    
    return (
        <div
            className={`relative h-[450px] w-[300px] overflow-hidden rounded-[32px] border border-white/10 bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out ${
                visible 
                    ? "opacity-100 scale-100 blur-0 translate-y-0" 
                    : "opacity-0 scale-110 blur-md translate-y-4"
            }`}
        >
            <img
                src={poster}
                alt="poster"
                className="h-full w-full object-cover shadow-inner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5" />
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/20" />
        </div>
    );
}