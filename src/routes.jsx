import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from './page/Home/home';
import {Movie} from './page/Movie/Movie'
import {Favorite} from './page/Favorite/Favorite'

import { Header } from './components/Header/Header';
import { Erro } from './page/Erro/Erro';

export function AppRoute(){
   return(
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path='/netfilme-api' element= {<Home/>}/>
            <Route path='/movie/:id' element= {<Movie/>} />
            <Route path='/favorite' element={<Favorite/>}/>

            <Route path='*' element={ <Erro/>} />
         </Routes>
      </BrowserRouter>
   )
}