import "./Sidebarsets.css";

function Upcoming() {

  const upcomingMovies = [
  {
    title: "Avengers: Secret Wars",
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    release: "2027",
    genre: "Action, Superhero, Sci-Fi",
    description:
      "Marvel's next major event bringing heroes together for a massive multiverse battle."
  },
  {
    title: "Avatar 4",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release: "2029",
    genre: "Sci-Fi, Adventure, Fantasy",
    description:
      "The Avatar saga continues with new stories from the world of Pandora."
  },
  {
    title: "Spider-Man: Brand New Day",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release: "2026",
    genre: "Action, Superhero",
    description:
      "Spider-Man returns for a new adventure after the events of No Way Home."
  },
  {
    title: "Kalki 2898 AD: Part 2",
    poster: "posters/kalki2.jpg",
    release: "2027",
    genre: "Sci-Fi, Fantasy, Indian Cinema",
    description:
      "The next chapter of the futuristic Indian epic continues the battle between good and evil."
  }
];

  return (
    <div className="page">

      <h1>🚀 Upcoming</h1>

      <p>
        Stay updated with the latest movies coming soon.
      </p>


      <div className="anime-container">

        {upcomingMovies.map((movie,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={movie.poster}
              alt={movie.title}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{movie.title}</h2>

              <p>
                <b>Release:</b> {movie.release}
              </p>

              <p>
                <b>Genre:</b> {movie.genre}
              </p>

              <p>
                {movie.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Upcoming;