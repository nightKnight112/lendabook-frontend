# Use an official Node.js runtime as a parent image

FROM node:19.3.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) from the current directory into the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Build the application for production
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Serve the app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
