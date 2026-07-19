import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AuthLayout.css";

function AuthLayout(){

  return(

    <div className="auth-layout">

      <Navbar />

      <main className="auth-content">

        <Outlet />

      </main>

      <Footer />

    </div>

  );

}

export default AuthLayout;