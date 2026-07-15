import "./Sidebarsets.css";

function TVShows() {

  const tvShows = [
    {
      title: "Stranger Things",
      poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      year: "2016",
      rating: "8.6 ⭐",
      genre: "Sci-Fi, Mystery",
      description:
        "A group of friends discover supernatural mysteries in their small town."
    },
    {
      title: "Breaking Bad",
      poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      year: "2008",
      rating: "9.5 ⭐",
      genre: "Crime, Drama",
      description:
        "A chemistry teacher enters the dangerous world of crime."
    },
    {
      title: "Money Heist",
      poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      year: "2017",
      rating: "8.2 ⭐",
      genre: "Crime, Thriller",
      description:
        "A mastermind plans the biggest heist with a unique team of criminals."
    },
    {
      title: "The Family Man",
      poster: "posters/1855586-arjun-2025-11-01t174537.133.jpg",
      year: "2019",
      rating: "8.7 ⭐",
      genre: "Action, Thriller",
      description:
        "An Indian intelligence officer balances his secret missions and family life."
    }
  ];


  return (
    <div className="page">

      <h1>📺 TV Shows</h1>

      <p>
        Explore popular web series and television shows from around the world.
      </p>


      <div className="anime-container">

        {tvShows.map((show,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={show.poster}
              alt={show.title}
              className="anime-poster"
            />

            <div className="anime-info">

              <h2>{show.title}</h2>

              <p><b>Year:</b> {show.year}</p>

              <p><b>Rating:</b> {show.rating}</p>

              <p><b>Genre:</b> {show.genre}</p>

              <p>{show.description}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TVShows;