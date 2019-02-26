FROM node:10-alpine

ENV NODE_ENV=${NODE_ENV}

RUN npm i -g pm2

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1337 9229

CMD [ "pm2-runtime", "start", "pm2.json" ]
