import {Link} from 'react-router-dom';
import styles from './Erro.module.css';

export function Erro(){
   return(
      <div className={styles.notfound}>
         <h1>404</h1>
         <h2>Pagina não encontrada !</h2>
         <Link to="/net-filme-api">Veja todos filmes</Link>
      </div>
   )
}