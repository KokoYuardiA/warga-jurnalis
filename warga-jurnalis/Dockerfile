FROM node:18-alpine

WORKDIR /warga-jurnalis/

COPY public/ /warga-jurnalis/public
COPY src/ /warga-jurnalis/src
COPY package.json /warga-jurnalis/

RUN npm install

CMD ["npm", "run dev"]