import { useEffect, useState } from "react";
import API from "../../api/api"; // Adjust the path if needed

function FavoritesTable() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await API.get("/favorites");
      setMovies(response.data.favorites);
    } catch (err) {
      setError("Failed to load favorite movies.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading favorite movies...</h2>;
  }

  if (error) {
    return (
      <div className="page">
        <h2>{error}</h2>
        <button onClick={fetchFavorites}>Retry</button>
      </div>
    );
  }

  return (
    <div className="page">

      <h1> Favorite Movies Table</h1>

      {movies.length === 0 ? (
        <h2>No Favorite Movies Available</h2>
      ) : (
        <table className="movie-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Poster</th>
              <th>Movie Name</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>

                <td>{movie._id}</td>

                <td>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    width="70"
                  />
                </td>

                <td>{movie.title}</td>

                <td>{movie.year}</td>

                <td>{movie.rating}</td>

                <td>{movie.genre}</td>

              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default FavoritesTable;
