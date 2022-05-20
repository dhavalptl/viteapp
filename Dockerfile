# Install dependencies only when needed
FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm install

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# If using npm comment out above and use below instead
RUN npm run build


FROM nginx:1.21-alpine
EXPOSE 80
COPY --from=builder /app/config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html