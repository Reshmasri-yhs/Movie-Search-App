import "./Sidebarsets.css";

function Trending() {

  const trendingMovies = [
    {
      title: "Pushpa 2: The Rule",
      poster: "posters/pushpa2.jpg",
      rating: "8.2 ⭐",
      year: "2024",
      genre: "Action, Drama",
      description:
        "Pushpa returns with more power as he faces new enemies and challenges."
    },
    {
      title: "Deadpool & Wolverine",
      poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      rating: "7.8 ⭐",
      year: "2024",
      genre: "Action, Comedy",
      description:
        "Deadpool joins forces with Wolverine for an unexpected adventure."
    },
    {
      title: "Kalki 2898 AD",
      poster: "posters/kalki2.jpg",
      rating: "8.0 ⭐",
      year: "2024",
      genre: "Sci-Fi, Fantasy",
      description:
        "A futuristic Indian epic about a hero who rises to protect humanity."
    },
    {
      title: "Dune: Part Two",
      poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
      rating: "8.6 ⭐",
      year: "2024",
      genre: "Sci-Fi, Adventure",
      description:
        "Paul Atreides continues his journey across the desert planet Arrakis."
    }
  ];


  return (
    <div className="page">

      <h1>🔥 Trending</h1>

      <p>
        Check out the most popular movies everyone is watching right now.
      </p>


      <div className="anime-container">

        {trendingMovies.map((movie,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={movie.poster}
              alt={movie.title}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{movie.title}</h2>

              <p><b>Year:</b> {movie.year}</p>

              <p><b>Rating:</b> {movie.rating}</p>

              <p><b>Genre:</b> {movie.genre}</p>

              <p>{movie.description}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Trending;