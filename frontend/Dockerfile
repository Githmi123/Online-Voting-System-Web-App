# Use the official Node.js image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install the Vite plugin for React
RUN npm install @vitejs/plugin-react --save-dev

# Copy the rest of the application code
COPY . .

# Set correct permissions for node_modules
RUN chown -R node:node /app/node_modules
RUN chmod -R 755 /app/node_modules

# Expose the port the app runs on
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]