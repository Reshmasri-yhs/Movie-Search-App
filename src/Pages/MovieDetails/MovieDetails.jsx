import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import API from "../../api/api.js";
import "./MovieDetails.css";

function MovieDetails(){

const {id}=useParams();
const navigate=useNavigate();

const [movie,setMovie]=useState(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

const FALLBACK_POSTER=
"https://via.placeholder.com/400x600?text=No+Image";


const fetchMovie=async()=>{

try{

setLoading(true);
setError("");

const response=await API.get(`/movies/${id}`);

setMovie(response.data.movie);

}
catch(err){

console.log(err);
setError("Movie not found.");

}
finally{

setLoading(false);

}

};


useEffect(()=>{

fetchMovie();

},[id]);


if(loading)
return <h2 className="status">Loading movie...</h2>;


if(error){

return(

<div className="status">

<h2>{error}</h2>

<button onClick={fetchMovie}>
Retry
</button>

</div>

);

}


return(

<div className="movie-details">


<button
className="back-btn"
onClick={()=>navigate("/movies")}
>
← Back to Movies
</button>



<div className="details-card">


<div className="poster-section">

<img
src={
movie.poster?.startsWith("http")
?
movie.poster
:
FALLBACK_POSTER
}
alt={movie.title}
onError={(e)=>
e.currentTarget.src=FALLBACK_POSTER
}
/>

</div>



<div className="details-info">


<h1>
{movie.title}
</h1>



<div className="movie-tags">

<span>⭐ {movie.rating}/10</span>
<span>{movie.genre}</span>
<span>{movie.language||"N/A"}</span>
<span>{movie.year}</span>

</div>




<div className="info-grid">

<p>
<strong>Director</strong><br/>
{movie.director||"N/A"}
</p>


<p>
<strong>Platform</strong><br/>
{movie.platform||"N/A"}
</p>


<p>
<strong>Release Year</strong><br/>
{movie.year}
</p>


<p>
<strong>Language</strong><br/>
{movie.language||"N/A"}
</p>


</div>





<div className="overview">

<h3>
Overview
</h3>

<p>
{movie.review||
"A wonderful movie filled with memorable performances, engaging storytelling and beautiful visuals."}
</p>
{
movie.platforms &&
<div className="platform-section">

<h3>
Watch Now
</h3>


<div className="platform-buttons">

{
movie.platforms.map((platform,index)=>(

platform.url &&

<a
key={index}
href={platform.url}
target="_blank"
rel="noreferrer"
className="platform-btn"
>
{platform.name}
</a>

))

}

</div>

</div>
}
</div>
<div className="action-buttons">

<button className="favorite-btn">
♡ Favorite
</button>


{
movie.trailer &&

<a
href={movie.trailer}
target="_blank"
rel="noreferrer"
className="trailer-btn"
>
▶ Watch Trailer
</a>

}

</div>
{
movie.platforms?.length>0 &&

<div className="platform-section">

<h3>
Watch Now
</h3>


<div className="platform-buttons">

{
movie.platforms.map(platform=>(

<a
key={platform.name}
href={platform.url}
target="_blank"
rel="noopener noreferrer"
className="platform-btn"
>

{platform.name}

</a>

))

}

</div>

</div>

}



</div>


</div>


</div>

);

}

export default MovieDetails;
