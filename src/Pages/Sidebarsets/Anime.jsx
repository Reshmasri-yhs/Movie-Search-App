import "./Sidebarsets.css";
import "./Anime.css";

function Anime() {

  const animeList = [
    {
      title: "Attack on Titan",
      poster: "posters/attackontitan.jpg",
      year: "2013",
      rating: "9.1 ⭐",
      genre: "Action, Dark Fantasy",
      description:
        "Humanity fights for survival against giant creatures called Titans."
    },
    {
      title: "Demon Slayer",
      poster: "posters/61IarTdNHsL._AC_UF894,1000_QL80_.jpg",
      year: "2019",
      rating: "8.6 ⭐",
      genre: "Action, Adventure",
      description:
        "Tanjiro becomes a demon slayer to save his sister and defeat demons."
    },
    {
      title: "One Piece",
      poster: "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
      year: "1999",
      rating: "9.0 ⭐",
      genre: "Adventure, Fantasy",
      description:
        "Monkey D. Luffy and his crew search for the legendary One Piece treasure."
    },
    {
      title: "Jujutsu Kaisen",
      poster: "posters/jujutsukaisen.jpg",
      year: "2020",
      rating: "8.7 ⭐",
      genre: "Supernatural, Action",
      description:
        "Yuji Itadori joins a secret organization to fight dangerous curses."
    }
  ];


  return (
    <div className="page">

      <h1>Anime</h1>

      <p>
        Explore the best anime series and movies from around the world.
      </p>

      <div className="genres">
        <button>Action</button>
        <button>Adventure</button>
        <button>Fantasy</button>
        <button>Comedy</button>
        <button>Romance</button>
        <button>Slice of Life</button>
        <button>Shonen</button>
        <button>Seinen</button>
        <button>Isekai</button>
        <button>Sports</button>
      </div>


      <div className="anime-container">

        {animeList.map((anime, index) => (

          <div className="anime-card" key={index}>

            <img 
              src={anime.poster} 
              alt={anime.title}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{anime.title}</h2>

              <p><b>Year:</b> {anime.year}</p>

              <p><b>Rating:</b> {anime.rating}</p>

              <p><b>Genre:</b> {anime.genre}</p>

              <p>{anime.description}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Anime;
