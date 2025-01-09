# Sparta_FilmSearch
# Sparta_FilmSearch

Sparta_FilmSearch는 TMDB API를 사용해서, 영화 검색 사이트를 제공하는 프로젝트입니다.

---

## 📌 필수 기능

### 1. TMDB API 연동
- TMDB API에서 데이터를 **fetch** API로 가져오고, API 키를 통해 데이터 요청/응답을 처리한다.
- API 키를 적절히 보관하고, API 호출 시 정확한 경로와 파라미터를 사용한다.

### 2. 영화 카드 리스트 UI 구현
- 영화 포스터, 제목, 평점, 요약 등의 정보를 포함한 영화 카드 리스트 UI를 구현한다.
- **Flexbox** 또는 **Grid** 레이아웃을 사용해 반응형 디자인을 구현한다.

### 3. 영화 검색 기능
- 입력한 검색어로 영화 목록을 필터링하는 검색 기능을 구현한다.
    - **검색어 입력 후 버튼 클릭** 또는 **Enter 키**로 검색 실행 
-  검색어와 관련된 영화만 화면에 나타나도록 필터링 로직 구현이 필요하다.

### 4. 영화 상세 페이지 구현
- 각 영화 카드를 클릭했을 때, **해당 영화의 ID로** TMDB API에서 상세 정보를 받아와 화면에 표시한다.
    - **모달** 또는 **새 페이지**로 영화 상세 정보 표시
    - **뒤로 가기** 기능 구현

### 5. 모듈화 및 코드 분리
- **API 요청 로직**과 **UI 업데이트 로직**을 각각 파일로 분리하여 **모듈화**
    - 코드가 모듈화되면 유지보수성이 높아지고, 테스트가 용이

---

## 🚀 도전 기능

### 1. 이벤트 위임
- 영화 리스트 카드에 각각 이벤트 리스너를 붙이는 대신, 상위 요소에 이벤트 리스너를 등록해 **이벤트 위임**을 적용한다.
    - 동적으로 생성된 요소에 이벤트를 효율적으로 처리할 수 있게 되어, 페이지 성능 개선 가능

### 2. 로컬 저장소 활용한 ‘북마크’ 기능
- 관심 있는 영화들을 ‘북마크’ (혹은, ‘좋아요’) 할 수 있는 기능을 구현한다.
    - 특정 버튼을 눌렀을 때, **localStorage**에 관련 데이터 저장

### 3. async/await로 API 호출 리팩터링
- TMDB에서 기본으로 제공하는 Promise chaining 기반의 API 호출 코드를 **async/await** 문법으로 리팩터링한다.
    - 비동기 작업을 더 직관적으로 처리하고, 코드 가독성을 높이는 것이 목표

### 4. 쓰로틀링/디바운싱 (선택 도전 과제)
- 사용자가 검색어를 입력할 때마다 API를 호출하는 대신, **스로틀링** 또는 **디바운싱**을 사용해 최적화된 API 호출을 구현한다.
    - 성능 최적화를 통해 불필요한 API 호출을 줄이는 것이 목표

---

## 🛠️ 트러블 슈팅

### 1번
- **문제**:
- **해결 방법(또는 정리 문서 URL)**:

### 2번
- **문제**:
- **해결 방법(또는 정리 문서 URL)**:
---