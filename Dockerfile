FROM node:18

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./mogenius /app/website

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]
