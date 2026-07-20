import "./Dashboard.css";
import InfoCard from "../../cards/InfoCard/InfoCard.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import API from "../../api/api.js";

function Dashboard(){

  const navigate=useNavigate();

  const [stats,setStats]=useState({});
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  const fetchStats=async()=>{

    try{
      setLoading(true);
      setError("");

      const response=await API.get("/movies/stats");
      setStats(response.data);

    }catch(err){
      console.log(err);
      setError("Failed to load dashboard data.");

    }finally{
      setLoading(false);
    }

  };

  useEffect(()=>{
    fetchStats();
  },[]);


  function logout(){
    localStorage.removeItem("loggedUser");
    navigate("/login");
  }


  function goHome(){
    navigate("/");
  }


  if(loading){
    return <h2>Loading Dashboard...</h2>;
  }


  if(error){
    return(
      <div className="dashboard-page">
        <h2>{error}</h2>
        <button onClick={fetchStats}>
          Retry
        </button>
      </div>
    );
  }


  return(
    <div className="dashboard-page">

      <h2>Welcome Back !!!</h2>

      <div className="info-container">

        <InfoCard
          title="Total Movies"
          value={stats.totalMovies}
        />

        <InfoCard
          title="Average Rating"
          value={`${stats.averageRating} `}
        />

        <InfoCard
          title="Latest Movie"
          value={stats.latestMovie}
        />

        <InfoCard
          title="Total Genres"
          value={stats.totalGenres}
        />

      </div>

      <div className="dashboard-actions">

        <button 
          className="btn-primary"
          onClick={goHome}
        >
          Go to Home
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );

}

export default Dashboard;
