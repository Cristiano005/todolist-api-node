FROM node:24.12-alpine@sha256:7e0bd0460b26eb3854ea5b99b887a6a14d665d14cae694b78ae2936d14b2befb
ENV NODE_ENV production
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
USER node
CMD ["node", "./src/server.js"]
