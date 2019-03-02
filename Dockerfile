FROM node:9.0.0 as node
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4201
CMD ["npm", "start"]
