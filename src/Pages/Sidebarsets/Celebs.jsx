import "./Sidebarsets.css";

function Celebs() {

  const celebs = [
    {
      name: "Shah Rukh Khan",
      image: "posters/shah-rukh-khan-2092-12-09-2017-02-10-43.avif",
      profession: "Actor, Producer",
      known: "Jawan, Pathaan, Dilwale Dulhania Le Jayenge",
      bio:
        "One of India's biggest film stars, known as the King of Bollywood."
    },
    {
      name: "Tom Cruise",
      image: "https://image.tmdb.org/t/p/w500/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg",
      profession: "Actor, Producer",
      known: "Mission Impossible, Top Gun",
      bio:
        "Hollywood action star famous for performing his own stunts."
    },
    {
      name: "Allu Arjun",
      image: "posters/Allu-Arjun-Completes-22-Years-Of-Career-2.jpeg",
      profession: "Actor, Dancer",
      known: "Pushpa, Ala Vaikunthapurramuloo",
      bio:
        "Popular Indian actor known for his stylish performances and dance skills."
    },
    {
      name: "Emma Watson",
      image: "posters/Emma_Watson.jpg",
      profession: "Actress, Activist",
      known: "Harry Potter, Beauty and the Beast",
      bio:
        "British actress best known for playing Hermione Granger in Harry Potter."
    }
  ];


  return (
    <div className="page">

      <h1>🌟 Celebs</h1>

      <p>
        Discover popular actors, actresses, and filmmakers.
      </p>


      <div className="anime-container">

        {celebs.map((celeb,index)=>(

          <div className="anime-card" key={index}>

            <img
              src={celeb.image}
              alt={celeb.name}
              className="anime-poster"
            />


            <div className="anime-info">

              <h2>{celeb.name}</h2>

              <p>
                <b>Profession:</b> {celeb.profession}
              </p>

              <p>
                <b>Known For:</b> {celeb.known}
              </p>

              <p>
                {celeb.bio}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Celebs;