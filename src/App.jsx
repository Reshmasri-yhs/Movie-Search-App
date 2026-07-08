import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Movies from "./components/Movies/Movies.jsx";
import Register from './Pages/Registration/Register.jsx';
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");
   
  function renderContent() {
    if (selectedMenu === "Home") {
      return <Home />;
    }

    if (selectedMenu === "Movies") {
      return <Movies />;
    }

    if (selectedMenu === "Register") {
      return <Register />;
    }

    return <Dashboard title={selectedMenu} />;
  }

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className = "main">
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
        <main className="content-area">{renderContent()}</main>

        </div>
         <Footer />
      </div>
    
  )
};
export default App;
