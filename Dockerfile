FROM node:10-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install react-scripts@5.0.1 -g

COPY . .

# Build the React app for production
RUN npm run build

FROM nginx:10-alpine

COPY --from=build /app /usr/share/nginx/html

EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]