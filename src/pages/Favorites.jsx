import "../css/Favorites.css"; // Assuming you have a CSS file for styling

function Favorites() {
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
