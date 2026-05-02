import { useState } from "react";
import { searchMovieByKeyWord } from "../lib/api";

const ITEMS_PER_PAGE = 8;

export default function MovieSearch() {
    const [query, setQuery] = useState("");
    const [allFetchedMovies, setAllFetchedMovies] = useState([]);
    const [displayMovies, setDisplayMovies] = useState([]);
    const [internalPage, setInternalPage] = useState(1);
    const [apiPage, setApiPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isExpanded, setIsExpanded] = useState(true);

    const updateDisplayList = (movies, page) => {
        const startIndex = ((page - 1) * ITEMS_PER_PAGE) % 20;
        const selected = movies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        setDisplayMovies(selected);
    };

    const handleSearch = async (targetInternalPage = 1) => {
        if (!query.trim()) return;

        const targetApiPage = Math.ceil((targetInternalPage * ITEMS_PER_PAGE) / 20);

        try {
            setLoading(true);
            setError("");
            setIsExpanded(true);

            let currentMovies = allFetchedMovies;

            if (targetApiPage !== apiPage || targetInternalPage === 1) {
                const data = await searchMovieByKeyWord(query, null, targetApiPage);
                currentMovies = data.films || [];
                setAllFetchedMovies(currentMovies);
                setApiPage(targetApiPage);

                const totalItems = data.searchFilmsCountResult || 20;
                setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
            }

            updateDisplayList(currentMovies, targetInternalPage);
            setInternalPage(targetInternalPage);
        } catch (err) {
            setError("Не удалось загрузить фильмы");
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setAllFetchedMovies([]);
        setDisplayMovies([]);
        setInternalPage(1);
        setApiPage(1);
        handleSearch(1);
    };

    const hasQuery = query.trim().length > 0;

    return (
        <section className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold text-white">🎬 Кино на вечер</h3>
                    <p className="text-sm text-white/50">Найдите идеальный фильм под вашу пиццу</p>
                </div>

                {hasQuery && (
                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-bold text-white transition hover:bg-white/10"
                        aria-label={isExpanded ? "Свернуть результаты" : "Развернуть результаты"}
                    >
                        <span
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-0" : "rotate-180"}`}
                        >
                            ^
                        </span>
                    </button>
                )}
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Название фильма (например, Интерстеллар)..."
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-purple-500/50"
                />
                <button
                    type="submit"
                    className="h-12 shrink-0 rounded-xl bg-purple-600 px-8 font-semibold text-white transition hover:bg-purple-500 active:scale-95 cursor-pointer"
                >
                    Найти
                </button>
            </form>

            {loading && <div className="mt-8 animate-pulse text-center text-purple-400">Ищем фильмы...</div>}
            {error && <div className="mt-8 text-center text-red-400">{error}</div>}

            {!!displayMovies.length && !loading && isExpanded && (
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {displayMovies.map((movie) => (
                            <article
                                key={movie.filmId}
                                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:border-purple-500/50"
                            >
                                <div className="aspect-[2/3] overflow-hidden rounded-lg">
                                    <img
                                        src={movie.posterUrlPreview}
                                        alt={movie.nameRu || movie.nameEn}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-3 px-1">
                                    <h4 className="truncate text-sm font-medium text-white">
                                        {movie.nameRu || movie.nameEn}
                                    </h4>
                                    <p className="text-xs text-white/40">
                                        {movie.year}
                                        {movie.filmLength ? `, ${movie.filmLength} мин` : ""}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <button
                                type="button"
                                onClick={() => handleSearch(internalPage - 1)}
                                disabled={internalPage <= 1 || loading}
                                className="flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium text-white transition hover:bg-white/10 disabled:opacity-30"
                            >
                                ← Назад
                            </button>
                            <div className="text-sm font-medium text-white/70">
                                Страница <span className="text-white">{internalPage}</span> из {totalPages}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSearch(internalPage + 1)}
                                disabled={internalPage >= totalPages || loading}
                                className="flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium text-white transition hover:bg-white/10 disabled:opacity-30"
                            >
                                Вперёд →
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}


