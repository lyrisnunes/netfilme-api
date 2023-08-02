import './styles.css';

import {Link} from 'react-router-dom';

export function Erro(){
   return(
      <div className='not-found'>
         <h1>404</h1>
         <h2>Pagina não encontrada !</h2>
         <Link to="/net-filme-api">Veja todos filmes</Link>
      </div>
   )
}