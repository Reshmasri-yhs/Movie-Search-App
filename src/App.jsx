import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';

import Movies from "./components/Movies/Movies.jsx";
import AuthLayout from "./components/AuthLayout/AuthLayout.jsx";
import Login from './Pages/Login/login.jsx';
import Register from './Pages/Registration/Register.jsx';
import Profile from "./Pages/Profile/Profile.jsx";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import FavoritesTable from "./components/FavoritesTable/FavoritesTable.jsx";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Trending from "./Pages/Sidebarsets/Trending.jsx";
import Toprated from "./Pages/Sidebarsets/Toprated.jsx";
import Upcoming from "./Pages/Sidebarsets/Upcoming.jsx";
import Genres from "./Pages/Sidebarsets/Genres.jsx";
import Favorites from "./Pages/Sidebarsets/Favorites.jsx";
import History from "./Pages/Sidebarsets/History.jsx";
import Settings from "./Pages/Sidebarsets/Settings.jsx";
import Logout from "./Pages/Sidebarsets/Logout.jsx";
import TVShows from "./Pages/Sidebarsets/TV Shows.jsx";
import Anime from "./Pages/Sidebarsets/Anime.jsx";
import Celebs from './Pages/Sidebarsets/Celebs.jsx';
import MoviesAPI from "./Pages/MoviesAPI/MoviesAPI.jsx";
import MovieDetails from "./Pages/MovieDetails/MovieDetails.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import AddMovie from "./components/Admin/AddMovie";

function App() {
      const [loggedUser,setLoggedUser]=useState(null);
       useEffect(()=>{
      const user=localStorage.getItem("loggedUser");
         if(user){
            setLoggedUser(JSON.parse(user));
           }

        },[]);
    return(
    <Routes>


  {/* Login/Register Layout */}

  <Route element={<AuthLayout />}>

    <Route path="login" element={<Login />} />

    <Route path="register" element={<Register />} />

  </Route>



  {/* Main Website Layout */}

  <Route path="/" element={<Layout />}>

    <Route index element={<Home />} />

    <Route path="profile" element={<Profile />} />
     
     <Route path="/admin/add-movie"element={<AddMovie/>}/>
    <Route path="movies" element={
      
        <Movies />
      
    }/>

    <Route path="movies-api" element={<MoviesAPI />} />

    <Route path="movies/:id" element={<MovieDetails />} />

    <Route path="dashboard" element={
      
        <Dashboard />
      
    }/>

    <Route path="trending" element={<Trending />} />

    <Route path="toprated" element={<Toprated />} />

    <Route path="upcoming" element={<Upcoming />} />

    <Route path="genres" element={<Genres />} />

    <Route path="favorites" element={
      <ProtectedRoute>
        <Favorites />
      </ProtectedRoute>
    }/>

    <Route path="favorites-table" element={
      <ProtectedRoute>
        <FavoritesTable />
      </ProtectedRoute>
    }/>

    <Route path="history" element={
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    }/>

    <Route path="settings" element={
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    }/>

    <Route path="logout" element={<Logout />} />

    <Route path="tvshows" element={<TVShows />} />

    <Route path="anime" element={<Anime />} />

    <Route path="celebs" element={<Celebs />} />


    <Route path="*" element={<NotFound />} />

  </Route>


</Routes>
  
    
    );

}
export default App;
