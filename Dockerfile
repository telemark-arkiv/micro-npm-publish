# Setting the base to nodejs 7.10.0
FROM node:7.10.0-alpine

# Maintainer
MAINTAINER Geir Gåsodden

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Build
RUN npm run build

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start