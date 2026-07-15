import "./Home.css";
import { Link } from "react-router-dom";
import InfoCard from "../../cards/InfoCard/InfoCard";
import Genres from "../Sidebarsets/Genres";   

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h2>Welcome to Screen Scoop 🎬</h2>

        <p>
          Screen Scoop brings the world of movies to your fingertips.
          Search for your favorite films, browse trending titles,
          check ratings, read reviews, and discover what to watch next —
          all in one place.
        </p>

        <div className="hero-actions">
          <Link to="/movies" className="btn-primary">
            Browse Movies
          </Link>

          <Link to="/tvshows" className="btn-secondary">
            Explore TV Shows
          </Link>
        </div>
      </section>
         <section className="browse-section">
  <h3>Quick Browse</h3>

  <div className="browse-buttons">
    <Link to="/genres" className="browse-btn">🎭 Genres</Link>
    <Link to="/movies" className="browse-btn">🎬 Movies</Link>
    <Link to="/tvshows" className="browse-btn">📺 TV Shows</Link>
    <Link to="/anime" className="browse-btn">🐉 Anime</Link>
    <Link to="/toprated" className="browse-btn">⭐ Top Rated</Link>
    <Link to="/latest" className="browse-btn">🆕 Latest</Link>
    <Link to="/upcoming" className="browse-btn">🎬 Upcoming</Link>
    <Link to="/trending" className="browse-btn">🔥 Trending</Link>
    <Link to="/favorites" className="browse-btn">❤️ Favorites</Link>

  </div>
</section>
      <section className="stats-section">
        <InfoCard title="Movies Listed" value="1,200+" />
        <InfoCard title="TV Shows" value="450+" />
        <InfoCard title="Community Reviews" value="8,300+" />
        <InfoCard title="Active Members" value="2,100+" />
      </section>

      <section className="features-section">

        <h3>Why Screen Scoop?</h3>

        <div className="features-grid">

          <div className="feature">
            <h4>Discover</h4>
            <p>
              Search and filter thousands of movies and shows
              by genre, year, or rating.
            </p>
          </div>


          <div className="feature">
            <h4>Track</h4>
            <p>
              Create your watchlist and keep track of
              movies you want to watch.
            </p>
          </div>


          <div className="feature">
            <h4>Review</h4>
            <p>
              Share your opinions and explore reviews
              from the movie community.
            </p>
          </div>

        </div>

      </section>
      
      <section className="cta-section">

        <h3>Ready to dive in?</h3>

        <p>
          Join Screen Scoop and create your personal
          movie collection today.
        </p>


        <div className="cta-buttons">

          <Link to="/login" className="btn-secondary">
            View Your List
          </Link>

          <Link to="/register" className="btn-primary">
            Get Started
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;
