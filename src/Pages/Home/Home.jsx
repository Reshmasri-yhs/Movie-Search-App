import "./Home.css";
import {Link} from "react-router-dom";
import {useEffect,useState} from "react";
import InfoCard from "../../cards/InfoCard/InfoCard";
import MovieCard from "../../cards/MovieCard/MovieCard";
import API from "../../api/api";

function Home(){

const [movies,setMovies]=useState([]);
const [search,setSearch]=useState("");
const [results,setResults]=useState([]);
useEffect(()=>{

async function loadMovies(){

try{

const response=await API.get("/movies");
setMovies(response.data.movies);

}catch(err){

console.log(err);

}

}

loadMovies();

},[]);

const handleSearch=async()=>{

try{

const response=await API.get(
`/movies/search?q=${search.trim()}`
);

setResults(response.data.movies);

}catch(err){

console.log(err);

}

};

return(

<div className="home-page">

<section className="hero">

<div className="hero-overlay">

<p className="hero-tag">Featured</p>

<h1>Welcome to Screen Scoop</h1>

<p>
Discover trending movies, timeless classics and regional cinema from across India.
</p>

<div className="hero-actions">

<Link to="/movies" className="btn-primary">
Browse Movies
</Link>

<Link to="/register" className="btn-secondary">
Join Now
</Link>

</div>

</div>

</section>

<section className="search-box">

<input
type="text"
placeholder="Search movies, actors, directors..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={handleSearch}>
Search
</button>

</section>


{
results.length>0 &&

<section className="movie-section">

<h2>Search Results</h2>

<div className="movie-row">

{
results.map(movie=>(

<MovieCard
key={movie._id}
movie={movie}
/>

))
}

</div>

</section>

}

<section className="language-section">

<h2>Browse by Language</h2>

<div className="language-list">

<span>Telugu</span>
<span>Tamil</span>
<span>Hindi</span>
<span>Malayalam</span>
<span>Kannada</span>
<span>English</span>
<span>Korean</span>
<span>Japanese</span>

</div>

</section>

<section className="genre-section">

<h2>Popular Genres</h2>

<div className="genre-list">

<span>Action</span>
<span>Drama</span>
<span>Romance</span>
<span>Comedy</span>
<span>Thriller</span>
<span>Family</span>

</div>

</section>

<section className="browse-section">

<h2>Quick Browse</h2>

<div className="browse-buttons">

<Link to="/movies" className="browse-btn">Movies</Link>
<Link to="/tvshows" className="browse-btn">TV Shows</Link>
<Link to="/anime" className="browse-btn">Anime</Link>
<Link to="/trending" className="browse-btn">Trending</Link>
<Link to="/toprated" className="browse-btn">Top Rated</Link>
<Link to="/upcoming" className="browse-btn">Upcoming</Link>
<Link to="/favorites" className="browse-btn">Favorites</Link>

</div>

</section>
<section className="movie-section">

<h2>Trending Movies</h2>

<div className="movie-row">

{
movies.slice(0,6).map(movie=>(
<MovieCard
key={movie._id}
movie={movie}
/>
))
}

</div>

</section>


<section className="movie-section">

<h2>Top Rated</h2>

<div className="movie-row">

{
movies
.filter(movie=>Number(movie.rating)>=8)
.map(movie=>(
<MovieCard
key={movie._id}
movie={movie}
/>
))
}

</div>

</section>


<section className="movie-section">

<h2>Recently Added</h2>

<div className="movie-row">

{
[...movies]
.reverse()
.slice(0,6)
.map(movie=>(
<MovieCard
key={movie._id}
movie={movie}
/>
))
}

</div>

</section>


<section className="stats-section">

<InfoCard title="Movies" value="1200+" />

<InfoCard title="TV Shows" value="450+" />

<InfoCard title="Reviews" value="8300+" />

<InfoCard title="Members" value="2100+" />

</section>
<section className="features-section">

<h2>Why Choose Screen Scoop?</h2>

<div className="features-grid">

<div className="feature">

<h3>Discover</h3>

<p>
Explore trending and regional cinema from one place.
</p>

</div>


<div className="feature">

<h3>Organize</h3>

<p>
Save favorites and create your personal watchlist.
</p>

</div>


<div className="feature">

<h3>Review</h3>

<p>
Rate movies and share your opinions with others.
</p>

</div>

</div>

</section>


<section className="cta-section">

<h2>Start Your Movie Journey</h2>

<p>
Join Screen Scoop and discover your next favorite movie.
</p>

<Link to="/register" className="btn-primary">
Create Account
</Link>

</section>


</div>

);

}

export default Home;
