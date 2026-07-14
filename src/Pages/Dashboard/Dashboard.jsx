import "./Dashboard.css";
import InfoCard from "../../cards/InfoCard/InfoCard.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate=useNavigate();

  function logout(){
  localStorage.removeItem("loggedUser");
   navigate("/login");
  }

   function goHome() {
    navigate("/");
  }

  return (
    <div className="dashboard-page">
      <h2>Welcome Back !!!</h2>

      <div className="dashboard-actions">
        <button className="btn-primary" onClick={goHome}>
          Go to Home
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      </div>


);

}

export default Dashboard;