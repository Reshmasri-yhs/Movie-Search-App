import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, editMovie, deleteMovie, toggleFavorite }){

const navigate=useNavigate();

const FALLBACK_POSTER=
"/no-poster.png";

return(

<div className="movie-card">

<div className="movie-poster">

<img
src={
movie.poster?.startsWith("http")
?movie.poster
:FALLBACK_POSTER
}
alt={movie.title}
onError={(e)=>e.currentTarget.src=FALLBACK_POSTER}
/>

<span className="rating">
⭐ {movie.rating}/10
</span>

</div>

<div className="movie-info">

<h3>{movie.title}</h3>

<div className="movie-tags">

<span>{movie.genre}</span>

<span>{movie.language}</span>

<span>{movie.year}</span>

</div>

<div className="card-buttons">

{
toggleFavorite &&

<button
className="favorite-btn"
onClick={()=>toggleFavorite(movie)}
>
{movie.favorite?"♥ Favorited":"♡ Favorite"}
</button>

}


<button
className="details-btn"
onClick={()=>navigate(`/movies/${movie._id}`)}
>
Details
</button>


</div>



</div>

</div>

);

}

export default MovieCard;
