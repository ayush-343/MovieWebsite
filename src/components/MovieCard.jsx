import "../css/MovieCard.css"; // Assuming you have a CSS file for styling
function MovieCard({ movie }) {
  function onFaveriteClick() {
    alert(`You clicked on ${movie.title}`);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <buttion className="favite-btn" onClick={onFaveriteClick}>
            ❤️
          </buttion>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Genre: {movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
