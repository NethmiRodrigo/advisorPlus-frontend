FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

RUN npm install react-scripts@3.4.1 -g 

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]