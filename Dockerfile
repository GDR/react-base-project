FROM node:12-alpine

RUN apk update && apk add util-linux

WORKDIR /opt/app

COPY .sassrc.js package.json package-lock.json tsconfig.json ./
RUN npm install

COPY src ./src
RUN npm run build

FROM alpine:3.9

RUN apk update && \
    apk add nginx && \
    rm -rf /var/cache/apk/* && \
    mkdir /run/nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /opt/app/dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
