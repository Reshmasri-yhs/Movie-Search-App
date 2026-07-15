import { useEffect,useState } from "react";

function FavoritesTable(){

  const [movies,setMovies]=useState([]);


  useEffect(()=>{

    const savedMovies=
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];


    setMovies(savedMovies);

  },[]);



  return(

    <div className="page">


      <h1>
        🎬 Favorite Movies Table
      </h1>



      {
        movies.length===0

        ?

        <h2>
          No Movies Available
        </h2>


        :

        <table className="movie-table">


          <thead>

            <tr>

              <th>
                ID
              </th>

              <th>
                Poster
              </th>

              <th>
                Movie Name
              </th>

              <th>
                Year
              </th>

              <th>
                Rating
              </th>

              <th>
                Genre
              </th>

            </tr>

          </thead>



          <tbody>


          {
            movies.map(movie=>(


              <tr key={movie.id}>


                <td>
                  {movie.id}
                </td>


                <td>

                  <img
                  src={movie.poster}
                  alt={movie.title}
                  width="70"
                  />

                </td>


                <td>
                  {movie.title}
                </td>


                <td>
                  {movie.year}
                </td>


                <td>
                  {movie.rating}
                </td>


                <td>
                  {movie.genre}
                </td>


              </tr>


            ))
          }


          </tbody>


        </table>

      }


    </div>

  );

}


export default FavoritesTable;