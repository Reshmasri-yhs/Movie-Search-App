import { useEffect, useState } from "react";
import "./Sidebarsets.css";

function Favorites(){

  const defaultMovies=[
    {
      id:1,
      title:"Interstellar",
      poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      year:"2014",
      rating:"8.7 ⭐",
      genre:"Sci-Fi, Adventure",
      description:"A team of astronauts travels through a wormhole to find a new home for humanity."
    },
    {
      id:2,
      title:"The Dark Knight",
      poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      year:"2008",
      rating:"9.0 ⭐",
      genre:"Action, Crime",
      description:"Batman faces his greatest enemy, the Joker, in Gotham City."
    },
    {
      id:3,
      title:"Avengers: Endgame",
      poster:"https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      year:"2019",
      rating:"8.4 ⭐",
      genre:"Action, Fantasy",
      description:"The Avengers unite for one final battle to restore the universe."
    }
  ];


  const [movies,setMovies]=useState([]);

  const [movieName,setMovieName]=useState("");



  // READ FROM LOCAL STORAGE

  useEffect(()=>{

    const savedMovies=
    JSON.parse(
      localStorage.getItem("favorites")
    );


    if(savedMovies){
      setMovies(savedMovies);
    }
    else{
      setMovies(defaultMovies);

      localStorage.setItem(
        "favorites",
        JSON.stringify(defaultMovies)
      );
    }

  },[]);



  // CREATE

  function addMovie(){

    if(movieName.trim()===""){
      return;
    }


    const newMovie={

      id:Date.now(),

      title:movieName,

      poster:"https://via.placeholder.com/300x450",

      year:"2026",

      rating:"New ⭐",

      genre:"Unknown",

      description:"Added to your favorite collection."

    };


    const updatedMovies=[
      ...movies,
      newMovie
    ];


    setMovies(updatedMovies);


    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedMovies)
    );


    setMovieName("");

  }



  // UPDATE

  function editMovie(id){

    const updatedName=
    prompt(
      "Enter new movie name"
    );


    if(updatedName){

      const updatedMovies=
      movies.map(movie=>

        movie.id===id
        ?
        {
          ...movie,
          title:updatedName
        }
        :
        movie

      );


      setMovies(updatedMovies);


      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedMovies)
      );

    }

  }



  // DELETE

  function deleteMovie(id){

    const confirmDelete=
    window.confirm(
      "Delete this movie from favorites?"
    );


    if(confirmDelete){

      const updatedMovies=
      movies.filter(
        movie=>movie.id!==id
      );


      setMovies(updatedMovies);


      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedMovies)
      );

    }

  }



return(

<div className="page">

<h1>
❤️ Favorites
</h1>


<p>
Your favorite movies collection.
</p>


<input

type="text"

placeholder="Add favorite movie"

value={movieName}

onChange={(e)=>
setMovieName(e.target.value)
}

/>


<button onClick={addMovie}>
Add Movie
</button>



{
movies.length===0

?

<h2>
No Favorite Movies Added 🎬
</h2>


:

<div className="anime-container">


{
movies.map(movie=>(


<div

className="anime-card"

key={movie.id}

>


<img

src={movie.poster}

alt={movie.title}

className="anime-poster"

/>



<div className="anime-info">


<h2>
{movie.title}
</h2>


<p>
<b>Year:</b> {movie.year}
</p>


<p>
<b>Rating:</b> {movie.rating}
</p>


<p>
<b>Genre:</b> {movie.genre}
</p>


<p>
{movie.description}
</p>



<button
onClick={()=>
editMovie(movie.id)
}
>
Edit
</button>


<button
onClick={()=>
deleteMovie(movie.id)
}
>
Delete
</button>


</div>


</div>


))

}


</div>

}


</div>

);

}


export default Favorites;