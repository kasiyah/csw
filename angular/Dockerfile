FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm cache clean --force && npm install
COPY . /usr/src/app
ENV PORT 4200
EXPOSE 4200
CMD [ "npm", "run", "start" ]



