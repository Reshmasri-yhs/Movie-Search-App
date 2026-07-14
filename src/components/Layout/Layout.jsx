import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout(){

return(

<div className="app-layout">

      <Navbar />

      <Header />


      <div className="main-layout">
        <Sidebar />
        <main className="content">

          <Outlet />

        </main>


      </div>


      <Footer />

    </div>

  );

}


export default Layout;