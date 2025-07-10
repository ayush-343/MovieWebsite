import "../css/MovieCard.css"; // Assuming you have a CSS file for styling
function MovieCard({ movie }) {
  function onFaveriteClick() {
    alert(`You clicked on ${movie.title}`);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <buttion className="favite-btn" onClick={onFaveriteClick}>
            ❤️
          </buttion>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
