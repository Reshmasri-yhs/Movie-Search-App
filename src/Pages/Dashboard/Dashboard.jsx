import "./Dashboard.css";
import InfoCard from "../../cards/InfoCard/InfoCard.jsx";

function Dashboard({ title }) {
  return (
    <div className="dashboard">
      <h2>{title}</h2>

      <div className="dashboard-grid">
        <InfoCard title="Movies" value="Browse movie collections" />
        <InfoCard title="Reviews" value="Read and share reviews" />
        <InfoCard title="Watchlist" value="Save movies for later" />
        <InfoCard title="Community" value="Connect with movie fans" />
      </div>
    </div>
  );
}

export default Dashboard;