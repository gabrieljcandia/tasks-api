# Build project
FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Setup environment
EXPOSE 4000
CMD [ "node", "build/index.js" ]