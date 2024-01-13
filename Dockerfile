FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -s

COPY . .

RUN npm install -g create-vite

RUN npm run build

# Use a lightweight production image
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
