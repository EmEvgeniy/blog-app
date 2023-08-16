FROM node:lts as build

WORKDIR /client

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# NGINX

FROM nginx:1.25

COPY --from=build /client/build /usr/share/nginx/html
COPY .nginx/*.conf /etc/nginx/conf.d/

# RUN cat /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
