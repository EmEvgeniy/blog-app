FROM node:lts-alpine

RUN npm rebuild bcrypt --build-from-source

WORKDIR /api

COPY package.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "start" ]