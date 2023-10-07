# Use an official Node.js runtime as the base image
FROM node:16-alpine as builder
WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm run build

# Stage 2: Create the final image
FROM node:14-slim
WORKDIR /app

COPY --from=builder /app/dist ./
COPY --from=builder /app/package.json ./
RUN npm install --silent
EXPOSE 5173
CMD ["yarn", "dev"]