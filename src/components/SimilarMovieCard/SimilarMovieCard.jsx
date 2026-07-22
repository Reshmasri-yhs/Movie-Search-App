import "./SimilarMovieCard.css";

function SimilarMovieCard({movie}){

return(

<div className="similar-card">

<img
src={movie.poster || "/no-poster.png"}
alt={movie.title}
/>

<h3>
{movie.title}
</h3>

</div>

);

}

export default SimilarMovieCard;