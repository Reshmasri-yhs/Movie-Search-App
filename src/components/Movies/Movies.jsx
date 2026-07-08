import "./Movie.css";
import MovieCard from "../../cards/MovieCard/MovieCard.jsx";

const movieCategories = [
  {
    title: "Trending",
    description: "Browse movies that are popular right now.",
  },
  {
    title: "Top Rated",
    description: "Find the highest rated movies from viewers.",
  },
  {
    title: "Now Playing",
    description: "Explore movies currently running in theatres.",
  },
  {
    title: "Popular",
    description: "Discover movies loved by a wide audience.",
  },
];

function Movies() {
  return (
    <div className="Movie-content">
      {movieCategories.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default Movies;