FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./mogenius /app/website

CMD ["npm", "run", "serve"]
