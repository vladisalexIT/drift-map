const BASE_URL = 'https://kinopoiskapiunofficial.tech';
const API_KEY = '8bc7a622-c691-43ce-b0e1-4de5e44c40bf';

export async function searchMovieByKeyWord(keyword, signal, page = 1) {
    const res = await fetch(
        `${BASE_URL}/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(keyword)}&page=${page}`,
        {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
            signal,
        }
    );

    if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
    }

    return res.json();
}




export async function getTopMovies() {
    const res = await fetch(
        `${BASE_URL}/api/v2.2/films/premieres?year=2025&month=JANUARY`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': API_KEY,
            },
        }
    );

    const data = await res.json();

    if (!res.ok) {
        console.log('premieres error data:', data);
        throw new Error(`HTTP error: ${res.status}`);
    }

    console.log('premieres data:', data);
    return data;
}