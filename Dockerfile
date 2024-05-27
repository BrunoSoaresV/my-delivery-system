
FROM node:latest AS backend


WORKDIR /usr/src/app/backend


COPY backend/package*.json ./


RUN npm install


COPY backend/ .


EXPOSE 5000


CMD ["npm", "start"]


FROM node:latest AS frontend


WORKDIR /usr/src/app/frontend


COPY frontend/package*.json ./


RUN npm install


COPY frontend/ .


RUN npm run build


FROM node:latest


WORKDIR /usr/src/app


COPY --from=backend /usr/src/app/backend .


COPY --from=frontend /usr/src/app/frontend/build ./frontend


EXPOSE 5000


CMD ["node", "index.js"]
