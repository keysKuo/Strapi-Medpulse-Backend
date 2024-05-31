FROM node:18-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 2405

CMD ["npm", "run", "start"]
