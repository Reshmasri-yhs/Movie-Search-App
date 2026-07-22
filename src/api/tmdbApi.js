import axios from "axios";


const TMDB_API = axios.create({

baseURL:"http://localhost:5000/api/tmdb",

});



export const getTrendingMovies=async()=>{

const res=await TMDB_API.get("/tmdb/trending");

return res.data;

};



export const getPopularMovies=async()=>{

const res=await TMDB_API.get("/tmdb/popular");

return res.data;

};



export const getTopRatedMovies=async()=>{

const res=await TMDB_API.get("/tmdb/top-rated");

return res.data;

};



export const getUpcomingMovies=async()=>{

const res=await TMDB_API.get("/tmdb/upcoming");

return res.data;

};



export const getNowPlayingMovies=async()=>{

const res=await TMDB_API.get("/tmdb/now-playing");

return res.data;

};



export const searchTMDBMovies=async(query)=>{

const res=await TMDB_API.get(
`/tmdb/search?q=${query}`
);

return res.data;

};



export const getMovieDetails=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}`
);

return res.data;

};



export const getMovieTrailer=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}/trailer`
);

return res.data;

};



export const getMovieCast=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}/cast`
);

return res.data;

};



export const getSimilarMovies=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}/similar`
);

return res.data;

};



export const getRecommendedMovies=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}/recommendations`
);

return res.data;

};



export const getMovieProviders=async(id)=>{

const res=await TMDB_API.get(
`/tmdb/movie/${id}/providers`
);

return res.data;

};



export const getPopularTVShows=async()=>{

const res=await TMDB_API.get(
"/tmdb/tv/popular"
);

return res.data;

};



export const getTopRatedTVShows=async()=>{

const res=await TMDB_API.get(
"/tmdb/tv/top-rated"
);

return res.data;

};



export const getOnAirTVShows=async()=>{

const res=await TMDB_API.get(
"/tmdb/tv/on-air"
);

return res.data;

};



export default TMDB_API;