import "./Sidebarsets.css";

function TopRated() {

  const topMovies = [
    {
      title: "The Shawshank Redemption",
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      rating: "9.3 ⭐",
      year: "1994",
      genre: "Drama",
      description:
        "A banker sentenced to life in prison builds hope and friendship behind bars."
    },
    {
      title: "The Godfather",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      rating: "9.2 ⭐",
      year: "1972",
      genre: "Crime, Drama",
      description:
        "The story of a powerful crime family and its struggle for control."
    },
    {
      title: "RRR",
      poster: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
      rating: "8.0 ⭐",
      year: "2022",
      genre: "Action, Historical",
      description:
        "Two legendary revolutionaries join forces against British rule in India."
    },
    {
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: "8.7 ⭐",
      year: "2014",
      genre: "Sci-Fi, Adventure",
      description:
        "Astronauts travel through space to find a new home for humanity."
    }
  ];


  return (
    <div className="page">

      <h1>⭐ Top Rated</h1>

      <p>
        Discover the highest-rated movies loved by audiences worldwide.
      </p>


      <div className="anime-container">

        {topMovies.map((movie,index)=>(

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

export default TopRated;