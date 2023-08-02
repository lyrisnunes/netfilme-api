import {Link} from 'react-router-dom'
import styles from './Header.module.css'

export function Header(){
   return(
      <header>
         <Link className={styles.logo} to="/netfilme-api">NET<span>.</span>FILME</Link>
         <Link className={styles.button} to="/favorite">Meus filmes favoritos</Link>
      </header>
   )
}