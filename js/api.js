// TMDB API와 통신 처리 담당
import { log } from './utils/logger.js';
import config from './config/apikey.js';
const TMDB_API_KEY = config.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * 예제 함수
 * https://developer.themoviedb.org/reference/intro/getting-started 참고
 * Bearer 토큰 방식
 */
export async function fetchMoviesExample() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    fetch(`${BASE_URL}/authentication`, options)
        .then(res => res.json())
        .then(res => log('Success', 'fetchMoviesExample', 'fetch 완료', res))
        .catch(err => log('Error', 'fetchMoviesExample', 'fetch 실패', err));
}
