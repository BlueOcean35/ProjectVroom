FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run docker-build

EXPOSE 3000
EXPOSE 80

CMD [ "npm", "run", "docker-start" ]