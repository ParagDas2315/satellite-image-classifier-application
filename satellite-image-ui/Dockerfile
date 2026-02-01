FROM node:18-bullseye-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

ENV CI=true
ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "start"]