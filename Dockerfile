FROM node:10

COPY package*.json ./

RUN npm install

COPY ./build .
COPY server.js .

EXPOSE 8080
CMD [ "node", "server.js" ]