import "./Sidebarsets.css";

function WatchHistory() {

  const history = [
    {
      title: "RRR",
      poster: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
      watched: "Watched Today",
      rating: "8.0 ⭐",
      genre: "Action, Drama, Historical",
      description:
        "Two revolutionaries fight against British rule in this epic Indian action drama."
    },
    {
      title: "Jawan",
      poster: "posters/jawan.jpg",
      watched: "Watched Yesterday",
      rating: "7.0 ⭐",
      genre: "Action, Thriller",
      description:
        "A man takes on a mission to correct social injustices and fight corruption."
    },
    {
      title: "3 Idiots",
      poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
      watched: "Watched 2 days ago",
      rating: "8.4 ⭐",
      genre: "Comedy, Drama",
      description:
        "Three engineering students discover friendship, dreams, and the pressure of education."
    },
    {
      title: "Baahubali: The Beginning",
      poster: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
      watched: "Watched 1 week ago",
      rating: "8.0 ⭐",
      genre: "Fantasy, Action",
      description:
        "A legendary warrior discovers his royal heritage and fights for his kingdom."
    }
  ];


  return (
    <div className="page">

      <h1>🕒 Watch History</h1>

      <p>Your recently watched movies.</p>


      <div className="anime-container">

        {history.map((movie,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={movie.poster}
              alt={movie.title}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{movie.title}</h2>

              <p><b>Status:</b> {movie.watched}</p>

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

export default WatchHistory;