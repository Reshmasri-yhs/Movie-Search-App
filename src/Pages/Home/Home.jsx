import "./Home.css";
import { Link } from "react-router-dom";
import InfoCard from "../../cards/InfoCard/InfoCard";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h2>Welcome to Screen Scoop</h2>
        <p>Find, watch, and review your favorite movies and TV shows — all in one place.</p>
        <div className="hero-actions">
          <Link to="/movies" className="btn-primary">Browse Movies</Link>
          <Link to="/tvshows" className="btn-secondary">Explore TV Shows</Link>
        </div>
      </section>

      
      <div className="stats-section">
        <InfoCard title="Movies Listed" value="1,200+"  />
        <InfoCard title="TV Shows" value="450+"  />
        <InfoCard title="Community Reviews" value="8,300+"  />
        <InfoCard title="Active Members" value="2,100+"  />
      </div>
         <div className="features-section">
        <h3>Why Screen Scoop?</h3>
        <div className="features-grid">
          <div className="feature">
            <h4>Discover</h4>
            <p>Search and filter thousands of movies and shows by genre, year, or rating.</p>
          </div>
          <div className="feature">
            <h4>Track</h4>
            <p>Build your watchlist and keep track of your choices.</p>
          </div>
          <div className="feature">
            <h4>Review</h4>
            <p>Share your thoughts and see what the community is saying.</p>
          </div>
        </div>
      </div>
      <section className="cta-section">
        <h3>Ready to dive in?</h3>
        <p>Create an account and start building your personal watchlist today.</p>
        <Link to="/login" className="btn-primary">view your list</Link>
        <Link to="/register" className="btn-primary">Get Started</Link>
      </section>
    </div>
  );
}

export default Home;