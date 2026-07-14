import { useNavigate } from "react-router-dom";
import "./MovieCard.css";


function MovieCard({ movie }) {
  
   const navigate = useNavigate();

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster}
          alt={movie.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_POSTER;
          }}
        />
       
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="genre-tag">{movie.genre}</span>

        <div className="movie-meta">
          <span>
            {movie.year}

          </span>
          <span>
            {movie.rating}/10

          </span>
        </div>

        <div
         className="movie-director">
          <span>
             Director:

          </span>
          <div 
          className="director-row">
            <p>
              {movie.director}
              </p>
             <p>
              Watch on: {movie.platform}
            </p>
            <p>
              Review: {movie.review}
              </p>
              <p>
             Languages: {movie.language}
              </p>
            </div>
            <button className="play-btn"
             onClick={() => navigate(`/movies/${movie.id}`)}>
              View details
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default MovieCard;