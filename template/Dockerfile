# base image
FROM node:16.13.1 as build-stage

# make app directory
WORKDIR /web 

# install module
COPY package.json .
COPY yarn.lock .
RUN yarn install --pure-lockfile

# copy source
COPY . /web

# build 
RUN yarn build

# nginx
FROM nginx:1.21.6-alpine

# copy web app
COPY --from=build-stage /web/build /usr/share/nginx/html

# copy nginx conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
