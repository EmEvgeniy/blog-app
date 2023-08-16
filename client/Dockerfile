FROM node:18 AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
# RUN npm run build
CMD ["npm", "run", "build"]
# Этап 2: развертывание с использованием Nginx
FROM nginx:alpine

# Копируем статические файлы из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html

# Копируем ваш файл конфигурации
COPY .nginx/*.conf /etc/nginx/conf.d/

# RUN cat /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]