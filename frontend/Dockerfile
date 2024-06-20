# Use the official Node.js image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set correct permissions for package-lock.json
RUN chown -R node:node /app/package-lock.json
RUN chmod -R 755 /app/package-lock.json

# Install dependencies
RUN npm install

# Install the Vite plugin for React
RUN npm install @vitejs/plugin-react --save-dev

# Install @emotion/react and @emotion/styled
RUN npm install @emotion/react @emotion/styled --save
# RUN npm install @mui/material @emotion/react @emotion/styled --force

# Copy the rest of the application code
COPY . .

# Set correct permissions for the entire /app directory
RUN chown -R node:node /app
RUN chmod -R 755 /app

# Rebuild esbuild to ensure compatibility with the current platform
RUN npm rebuild esbuild

# Expose the port the app runs on
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]