import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedIn");

   
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h1>OOPS!!! U Logged Out</h1>
        <p>You have successfully logged out of <b>Screen Scoop</b>.</p>
        <p>Redirecting to Home...</p>
      </div>
    </div>
  );
}

export default Logout;