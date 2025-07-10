import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"; // Assuming you have a CSS file for styling

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Dark Knight", year: 2008 },
    { id: 4, title: "Pulp Fiction", year: 1994 },
    { id: 5, title: "The Shawshank Redemption", year: 1994 },
    { id: 6, title: "The Godfather", year: 1972 },
    { id: 7, title: "The Matrix", year: 1999 },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("---");
  };
  return (
    <div ClassName="home">
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
