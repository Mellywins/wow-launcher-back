FROM ubuntu
EXPOSE 3000
RUN  apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_14.x && \
    apt-get install -y nodejs && \
    apt-get install -y npm 
WORKDIR /usr/app/src
COPY . /usr/app/src
RUN npm run tsc
RUN node main.js