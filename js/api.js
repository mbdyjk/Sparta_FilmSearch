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
    const options = getTMDBOptions('GET');

    fetch(`${BASE_URL}/authentication`, options)
        .then(res => res.json())
        .then(res => log('Success', 'fetchMoviesExample', 'fetch 완료', res))
        .catch(err => log('Error', 'fetchMoviesExample', 'fetch 실패', err));
}

/**
 * 인기 영화 목록을 가져오는 함수
 * @returns {Promise<Array>} - 인기 영화 목록 배열
 */
export async function fetchPopularMovies() {
    const options = getTMDBOptions('GET');

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => log('Success', 'fetchPopularMovies', 'fetch 완료', res))
        .catch(err => log('Error', 'fetchPopularMovies', 'fetch 실패', err));
}

/**
 * TMDB API를 호출하기 위한 기본 옵션을 반환하는 함수
 * @param {string} method - HTTP 메서드 (예: 'GET', 'POST', 'PUT' 등)
 * @returns {Object} - fetch에 필요한 옵션 객체
 */
function getTMDBOptions(method) {
    return {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`  // Bearer 토큰 방식
        }
    };
}