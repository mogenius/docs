FROM node:12.21.0-buster
ENV TZ Europe/Berlin

WORKDIR /usr/src/app

### Install dependencies ###
COPY package.json .

COPY . .

### BUILD ###
ENV NODE_ENV production
# ENV STAGE production

RUN rm -rf /node_modules
RUN npm uninstall bcrypt
RUN npm i bcrypt

CMD ["node", "dist/main"]
EXPOSE 1337
