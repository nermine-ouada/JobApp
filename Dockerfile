FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies

RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the application will run on
EXPOSE 4200

# Start the application
CMD ["npm", "start"]

