ARG BASE_REGISTRY=docker.io
ARG BASE_IMAGE=node
ARG BASE_TAG=22-alpine 

FROM ${BASE_REGISTRY}/${BASE_IMAGE}:${BASE_TAG}

# Install git for pnpm -> yarn interop dependencies
RUN apk add --no-cache git
# Install pnpm package manager globally
RUN npm install -g pnpm@9

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN pnpm install

# Install xdg-utils for `open:true` vite config - spawn xdg-open ENOENT err
RUN apk add --update xdg-utils

# Bundle app source
COPY . .

# Container listening on port 3000
EXPOSE 3000

# Start the app
CMD [ "pnpm", "start" ]
