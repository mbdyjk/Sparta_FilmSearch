/**
 * 공통 로그 함수
 * @param {string} type - 로그 유형 (e.g., Start, End, Success, Error, Info)
 * @param {string} target - 로깅 대상 컴포넌트명/함수명
 * @param {string} message - 로그 메시지
 * @param {any} [error] - 에러 세부사항 (선택)
 */
export function log(action, target, message, error = null) {
    const timestamp = new Date().toISOString();
    console.log(
        `[${timestamp}] [${action}] [${target}] - ${message}`,
        error ? { error } : ''
    );
}