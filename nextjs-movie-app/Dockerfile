# 1. Node 이미지 기반 (LTS 버전 추천)
FROM node:18-alpine

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. 패키지 복사 및 설치
COPY package.json package-lock.json* ./
RUN npm install

# 4. 나머지 코드 복사
COPY . .

# 5. Next.js 앱 빌드
RUN npm run build

# 6. 포트 설정
EXPOSE 3000

# 7. 앱 실행
CMD ["npm", "start"]