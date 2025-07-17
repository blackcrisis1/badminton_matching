FROM node:20.19-alpine

WORKDIR /app

# Copy only package.json and pnpm-lock.yaml first for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally and dependencies
RUN npm i -g pnpm@9.15.4
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the application
RUN pnpm build

# Expose the application port (if applicable)
EXPOSE 3000

# Define the default command
CMD ["pnpm", "start"]