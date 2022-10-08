ARG BASE_REGISTRY=docker.io
ARG BASE_IMAGE=node
ARG BASE_TAG=18-alpine3.16

FROM ${BASE_REGISTRY}/${BASE_IMAGE}:${BASE_TAG}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Container listening on port 3000
EXPOSE 3000

CMD [ "npm", "start" ]
