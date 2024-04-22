FROM node:21-alpine

#set working directory

WORKDIR /serverdir

#copy package.json

 COPY package.json .
 #install dependencies
 RUN npm install

#copy all files

COPY . .

#expose serve port
EXPOSE 3000

CMD ["node","main.js"]

#start app
