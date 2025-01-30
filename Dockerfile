# Sử dụng image Node.js chính thức làm base image
FROM node:18 AS build

# Cài đặt thư viện và cấu hình thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Biên dịch ứng dụng NestJS
RUN npm run build

# Sử dụng image Node.js cho môi trường production
FROM node:18 AS production

# Cài đặt thư viện và cấu hình thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json vào container
COPY package*.json ./
COPY ./public /app/public


# Cài đặt các dependencies cho production
RUN npm install --only=production

# Copy các file đã biên dịch từ stage build
COPY --from=build /usr/src/app/dist ./dist

# Mở port mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy ứng dụng NestJS
CMD ["node", "dist/main"]
