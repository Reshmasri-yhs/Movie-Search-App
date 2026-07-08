import "./MovieCard.css";

function MovieCard({ title, description }) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MovieCard;