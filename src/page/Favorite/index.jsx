import './styles.css';

import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'

export function Favorite(){
  const [movie, setMovie] =useState([]);

  useEffect(() => {
  
    // busca quais já estão salvos
    const myList = localStorage.getItem("@netfilme");
    setMovie(JSON.parse(myList) || [])
  }, []);

  function deleteMovie(id){
    let filterMovie = movie.filter((item) =>{
      return(item.id !== id)
    })

    setMovie(filterMovie);
    localStorage.setItem("@netfilme", JSON.stringify(filterMovie))
    toast.success("Filme removido com sucesso")
  }

  return(
    <div className='my-movie'>
      <h1>Meus filmes </h1>
      {movie.length === 0 && <span>Não existe nenhum filme salvo</span> }
      <ul>
        {movie.map((item)=> {
          return(
            <li key={item.id}> 
            <span>{item.title}</span>

            <div>
              <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
              <Link onClick={() => deleteMovie(item.id) }>Deletar</Link>
            </div>
            </li>
            
          )
        })}
      </ul>
    </div>
  )
}