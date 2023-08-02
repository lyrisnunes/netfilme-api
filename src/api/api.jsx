import axios from 'axios'

// Base URL: https://api.themoviedb.org/3/
// URL : movie/now_playing?api_key=275493ccc041b8b0d8dc6f6dc07605f1

export const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});