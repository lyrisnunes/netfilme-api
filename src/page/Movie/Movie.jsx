import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'

import { api } from "../../api/api";

import styles from './Movie.module.css'

export function Movie(){
   const {id} = useParams();
   const navigate = useNavigate();

   const [movie, setMovie] = useState({});
   const [loading, setLoadind] = useState(true);


   useEffect(() => {
      async function loadMovie() {
         await api.get(`/movie/${id}`,{
            params:{
               api_key: "275493ccc041b8b0d8dc6f6dc07605f1",
               language: "pt-BR",
            }
         }).then((response)=> {
            setMovie(response.data)
            setLoadind(false)
         })
         .catch(()=> {
            navigate("/", { replace : true});
            return;
         })
      }

      loadMovie();

      return()=>{
         console.log("componente desmontado")
      }
   }, [navigate, id])

   if(loading){
      return(
         <div className="movie-info">
            <h1>Carreegando detalhes ...</h1>
         </div>
      )
   }

   function saveMovie(){
      const myList = localStorage.getItem("@netfilme");

      let movieSaves = JSON.parse(myList) || [];

      const hasMovie = movieSaves.some((saveMovies) => saveMovies.id === movie.id);

      if(hasMovie){
         toast.warn("Filme já esta na lista");
         return;
      }

   movieSaves.push(movie);
   localStorage.setItem("@netfilme", JSON.stringify(movieSaves));
   toast.success("Filme salvo com sucesso")

}

   return(
      <div className={styles.movieinfo}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        <h2>Sinopse</h2>
        <p> {movie.overview}</p>
        <h3>Detalhes sobre o filme</h3>
        <p>Data de lançamento: {movie.release_date}
        </p>
        <p>Avaliação : {movie.vote_average} / 10</p>

        <div className={styles.btn}>
            <button onClick={saveMovie}>Salvar</button>
            <button>
               <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>
                  Trailer
               </a>
            </button>
        </div>
      </div>
   )
}