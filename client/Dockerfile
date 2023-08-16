FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап 2: развертывание с использованием Nginx
FROM nginx:alpine

# Копируем ваш файл конфигурации
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Копируем статические файлы из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]