FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production
RUN npm install pg
RUN npm install bcryptjs

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]