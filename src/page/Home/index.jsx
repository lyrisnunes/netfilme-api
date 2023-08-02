// https://api.themoviedb.org/3/movie/550?api_key=275493ccc041b8b0d8dc6f6dc07605f1
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { api } from "../../api/api";

import './styles.css'

export function Home(){
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function loadApi(){
         const response = await api.get("movie/now_playing",{
            params:{
               api_key: "275493ccc041b8b0d8dc6f6dc07605f1",
               language: "pt-BR",
               page: 1,
            }
         })
         setMovie(response.data.results.slice(0,10));
         setLoading(false)
      }
      loadApi();
   }, []);

   if(loading){
      return(
         <div className="loading">
            <h2>Carregando filme ...</h2>
         </div>
      )
   }

   return(
         <div  className="list-movie">
            {movie.map((movies)=> {
               return(
                  <article key={movies.id}>
                     <div className="box">
                        <h2>{movies.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title} />
                        <Link to={`/movie/${movies.id}`}>Ver mas</Link>
                     </div>
                  </article>
               )
            })}
         </div>
   )
}