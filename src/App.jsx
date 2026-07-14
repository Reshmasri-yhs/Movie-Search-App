import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Movies from "./components/Movies/Movies.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from './Pages/Login/login.jsx';
import Register from './Pages/Registration/Register.jsx';
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import MovieCard from  "./cards/MovieCard/MovieCard.jsx"
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
function App() {
  
    return(

  
    <Routes>

    <Route path="/" element={<Layout />}>

    <Route index element={<Home />} />

    <Route path="login" element={<Login />} />

    <Route path="register" element={<Register />} />

    <Route path="movies" element={<Movies />} />

    <Route path="dashboard" element={<Dashboard />} />
    <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
    );

}
export default App;
