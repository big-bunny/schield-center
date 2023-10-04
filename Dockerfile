# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or pnpm-lock.yaml) to the container
COPY package.json pnpm-lock.yaml* ./

# Install pnpm and project dependencies
RUN npm install -g pnpm && \
    pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port Next.js is running on (usually 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]
