FROM node:12-slim
WORKDIR /myDBapp
COPY package.json /myDBapp
RUN npm isntall
COPY . /myDBapp
CMD ["npm", "start"]
