import "./Sidebarsets.css";

function Genres() {

  const genres = [
    {
      name: "Action 🔥",
      poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "High-energy movies with fights, missions, and thrilling moments.",
      movies: "John Wick, Mission Impossible"
    },
    {
      name: "Comedy 😂",
      poster: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      description: "Funny and entertaining movies filled with laughter.",
      movies: "The Hangover, Free Guy"
    },
    {
      name: "Horror 👻",
      poster: "https://image.tmdb.org/t/p/w500/4q0PN9XlHYL7Q3C3V8X7W0R6K5T.jpg",
      description: "Scary movies with suspense, mysteries, and supernatural events.",
      movies: "The Conjuring, IT"
    },
    {
      name: "Sci-Fi 🚀",
      poster: "https://image.tmdb.org/t/p/w500/6FQe5p4J5xLqK5Jqf0g0k0w.jpg",
      description: "Explore futuristic worlds, technology, and space adventures.",
      movies: "Interstellar, Avatar"
    }
  ];


  return (
    <div className="page">

      <h1>🎭 Genres</h1>

      <p>
        Explore movies based on your favorite genres.
      </p>


      <div className="anime-container">

        {genres.map((genre,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={genre.poster}
              alt={genre.name}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{genre.name}</h2>

              <p>{genre.description}</p>

              <p>
                <b>Popular:</b> {genre.movies}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Genres;