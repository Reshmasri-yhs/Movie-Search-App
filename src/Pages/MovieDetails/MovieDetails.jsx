import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";


function MovieDetails(){

const {id}=useParams();

const [movie,setMovie]=useState(null);



useEffect(()=>{

fetch(
`https://fakestoreapi.com/products/${id}`
)

.then(res=>res.json())

.then(data=>{

setMovie(data);

});


},[id]);



if(!movie){

return <h2>Loading Details...</h2>;

}



return(

<div className="page">


<h1>
🎬 {movie.title}
</h1>


<img

src={movie.image}

width="200"

/>


<p>
{movie.description}
</p>


<p>
Category:
{movie.category}
</p>


<p>
Price:
{movie.price}
</p>


</div>

);


}


export default MovieDetails;