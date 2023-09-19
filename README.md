# Electron + React + Typescript Template
타입스크립트 환경으로 일렉트론과 리액트를 연동시킨 프로젝트

## Available Scripts

### `npm run start`
리액트와 일렉트론 실행을 자동화

1. 리액트 프로젝트 실행 (http://localhost:3000)
2. 일렉트론 프로젝트 컴파일
3. 일렉트론 프로젝트 실행

### `npm run build:[option]`

리액트와 일렉트론 빌드를 자동화

- option
1. react
    리액트 프로젝트를 빌드함
    2~5번 옵션에 리액트 빌드가 포함되어 있으나, 별도 빌드를 원할 경우 사용하는 옵션
    빌드한 결과물은 build/render 경로에 저장됨
2. portable
    프로젝트를 무설치 파일로 배포함
    빌드 대상은 build 디렉토리
    배포 결과물은 dist에 저장됨
3. win64
    프로젝트를 윈도우 64비트 환경의 설치파일로 배포함
    빌드 대상은 build 디렉토리
    배포 결과물은 dist에 저장됨
4. win32
    프로젝트를 윈도우 32비트 환경의 설치파일로 배포함
    빌드 대상은 build 디렉토리
    배포 결과물은 dist에 저장됨
5. mac
    프로젝트를 mac 환경의 설치파일로 배포함
    빌드 대상은 build 디렉토리
    배포 결과물은 dist에 저장됨
