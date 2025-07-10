import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css"; // Assuming you have a CSS file for styling
import { SearchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [error, setError] = useState(null); // State to hold any error messages
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies();
        setMovies(PopularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch popular movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    //remove leading and trailing spaces from the search query
    if (!searchQuery.trim()) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const searchResults = await SearchMovies(searchQuery);
      setError(null);
      setMovies(searchResults);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch search results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div classname="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
