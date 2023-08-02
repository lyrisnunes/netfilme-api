import {Link} from 'react-router-dom'
import './styles.css'

export function Header(){
   return(
      <header>
         <Link className='logo' to="/">NET<span>.</span>FILME</Link>
         <Link className='button' to="/favorite">Meus filmes favoritos</Link>

      </header>
   )
}