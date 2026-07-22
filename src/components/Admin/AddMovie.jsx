import {useState} from "react";
import API from "../../api/api.js";
import "./AddMovie.css";
function AddMovie(){

const initialMovie={
title:"",
year:"",
genre:"",
rating:"",
language:"",
poster:"",
backdrop:"",
runtime:"",
releaseDate:"",
director:"",
review:"",
trailer:"",
cast:[{name:"",role:"",image:""}],
similarMovies:[{title:"",poster:""}],
platforms:[
{name:"Netflix",url:""},
{name:"Prime Video",url:""},
{name:"Hotstar",url:""},
{name:"ZEE5",url:""},
{name:"Aha",url:""},
{name:"ETV Win",url:""}
]
};

const [movie,setMovie]=useState(initialMovie);


const handleChange=(e)=>{

setMovie({
...movie,
[e.target.name]:e.target.value
});

};


const updatePlatform=(index,key,value)=>{

const updated=[...movie.platforms];
updated[index][key]=value;

setMovie({...movie,platforms:updated});

};


const updateCast=(index,key,value)=>{

const updated=[...movie.cast];
updated[index][key]=value;

setMovie({...movie,cast:updated});

};


const updateSimilar=(index,key,value)=>{

const updated=[...movie.similarMovies];
updated[index][key]=value;

setMovie({...movie,similarMovies:updated});

};


const addMovie=async(e)=>{

e.preventDefault();

try{


const response = await API.post("/movies",movie);

console.log(response.data);
alert("Movie Added Successfully");

setMovie(initialMovie);

}catch(err){

console.log(err);
alert("Failed to add movie");

}

};


return(

<div className="add-movie-page">

<div className="add-movie-card">

<h1>Add Movie</h1>

<form onSubmit={addMovie}>


{
[
"title",
"year",
"genre",
"rating",
"language",
"poster",
"backdrop",
"runtime",
"releaseDate",
"director",
"trailer"
].map(field=>(

<input
key={field}
name={field}
placeholder={field}
value={movie[field]}
onChange={handleChange}
/>

))
}



<textarea
name="review"
placeholder="Movie Review"
value={movie.review}
onChange={handleChange}
/>



<h3>Cast</h3>

{
movie.cast.map((person,index)=>(

<div key={index}>

<input
placeholder="Name"
value={person.name}
onChange={(e)=>updateCast(index,"name",e.target.value)}
/>

<input
placeholder="Role"
value={person.role}
onChange={(e)=>updateCast(index,"role",e.target.value)}
/>

<input
placeholder="Image URL"
value={person.image}
onChange={(e)=>updateCast(index,"image",e.target.value)}
/>

</div>

))
}



<h3>Similar Movies</h3>

{
movie.similarMovies.map((item,index)=>(

<div key={index}>

<input
placeholder="Movie Name"
value={item.title}
onChange={(e)=>updateSimilar(index,"title",e.target.value)}
/>

<input
placeholder="Poster URL"
value={item.poster}
onChange={(e)=>updateSimilar(index,"poster",e.target.value)}
/>

</div>

))
}



<h3>Streaming Platforms</h3>

{
movie.platforms.map((platform,index)=>(

<div key={index}>

<input
placeholder="Platform Name"
value={platform.name}
onChange={(e)=>updatePlatform(index,"name",e.target.value)}
/>

<input
placeholder="Platform URL"
value={platform.url}
onChange={(e)=>updatePlatform(index,"url",e.target.value)}
/>

</div>

))
}



<button type="submit">
Add Movie
</button>


</form>

</div>

</div>

);

}

export default AddMovie;