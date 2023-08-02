import './App.css';

import {AppRoute} from './routes'
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

export function App(){
  return(
    <div>
    <ToastContainer autoClose={3000} />
      <AppRoute/>
    </div>
  )
}