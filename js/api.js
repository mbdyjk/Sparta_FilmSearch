// TMDB API와 통신 처리 담당
import config from './config/apikey.js';
const TMDB_API_KEY = config.TMDB_API_KEY;

// 예제 함수
// https://developer.themoviedb.org/reference/intro/getting-started 참고
export async function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    fetch('https://api.themoviedb.org/3/authentication', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
}