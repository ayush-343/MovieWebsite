const MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularMovies = async () => {
    const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${MOVIE_API_KEY}`);
    const data = await responce.json();
    return data.results;

}

export const SearchMovies = async (query) => {
    const responce = await fetch(`${BASE_URL}/search/movie?api_key=${MOVIE_API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await responce.json();
    return data.results;

}