import "../css/Favorites.css"; // Assuming you have a CSS file for styling
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favriotes-empty">
      <h1 className="favriotes-empty-text">No Favorites Yet</h1>
      <p className="favriotes-empty-subtext">
        Add some movies to your favorites list to see them here.
      </p>
    </div>
  );
}
export default Favorites;
