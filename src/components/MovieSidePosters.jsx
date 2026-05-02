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

    const pickPosters = useMemo(() => {
        if (!movies.length) return { left: null, right: null };

        const shuffled = shuffleArray(movies).filter(
            (movie) => movie.posterUrlPreview || movie.posterUrl
        );

        return {
            left: shuffled[0] || null,
            right: shuffled[1] || null,
        };
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
                const shuffled = shuffleArray(movies).filter(
                    (movie) => movie.posterUrlPreview || movie.posterUrl
                );

                setLeftPoster(shuffled[0] || null);
                setRightPoster(shuffled[1] || null);
                setVisible(true);
            }, 500);
        }, 7000);

        return () => clearInterval(interval);
    }, [movies]);

    if (loading || (!leftPoster && !rightPoster)) {
        return null;
    }

    return (
        <>
            <aside className="pointer-events-none fixed left-6 top-1/2 z-0 hidden -translate-y-1/2 xl:flex">
                {leftPoster && (
                    <PosterCard movie={leftPoster} visible={visible} />
                )}
            </aside>

            <aside className="pointer-events-none fixed right-6 top-1/2 z-0 hidden -translate-y-1/2 xl:flex">
                {rightPoster && (
                    <PosterCard movie={rightPoster} visible={visible} />
                )}
            </aside>
        </>
    );
}

function PosterCard({ movie, visible }) {
    const poster = movie.posterUrlPreview || movie.posterUrl;
    const title = movie.nameRu || movie.nameEn || "Movie poster";

    return (
        <div
            className={`relative h-[380px] w-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 scale-95"
            }`}
        >
            <img
                src={poster}
                alt={title}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>
    );
}