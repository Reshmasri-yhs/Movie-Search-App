import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";



function MoviesAPI(){

const [movies,setMovies]=useState([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");

const navigate=useNavigate();



useEffect(()=>{

fetch("https://fakestoreapi.com/products")

.then(response=>{

if(!response.ok){
throw new Error("Failed to fetch movies");
}

return response.json();

})

.then(data=>{

setMovies(data);

setLoading(false);

})

.catch(err=>{

setError(err.message);

setLoading(false);

});


},[]);



if(loading){

return(

<h2>
Loading Movies 🎬...
</h2>

);

}



if(error){

return(

<h2>
{error}
</h2>

);

}



return(

<div className="page">


<h1>
🎥 Movie Collection
</h1>



<div className="movie-container">


{

movies.map(movie=>(


<div

className="movie-card"

key={movie.id}

>


<img

src={movie.image}

alt={movie.title}

/>



<h2>
{movie.title}
</h2>


<p>
Price: {movie.price}
</p>



<button

onClick={()=>navigate(`/movie/${movie.id}`)}

>

View

</button>


</div>


))

}


</div>


</div>

);


}


export default MoviesAPI;