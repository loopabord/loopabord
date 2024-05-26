FROM node:20.11-alpine as build

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:alpine3.18-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html