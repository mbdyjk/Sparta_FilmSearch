// 메인 로직 처리
import { log } from './utils/logger.js';
import { fetchMoviesExample } from './api.js';

// 테스트
document.addEventListener('DOMContentLoaded', () => {
    fetchMoviesExample();
});