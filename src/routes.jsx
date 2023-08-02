import {BrowserRouter, Routes, Route} from 'react-router-dom';



import {Home} from './page/Home';
import {Movie} from './page/Movie';
import { Favorite } from './page/Favorite';

import { Erro } from './page/Erro';

import { Header } from './components/Header';
import { Info } from './components/Info';


export function AppRoute(){
   return(
      <BrowserRouter>
      <Header/>
      <Info/>
         <Routes>
            <Route path='/net-filme-api' element= {<Home/>}/>
            <Route path='/movie/:id' element= {<Movie/>} />
            <Route path='/favorite' element={<Favorite/>}/>

            <Route path='*' element={ <Erro/>} />
         </Routes>
      </BrowserRouter>
   )
}