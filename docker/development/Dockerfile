# syntax=docker.io/docker/dockerfile:1

# 1. Use Node.js 22.13.0 on Alpine Linux as the base image
FROM node:22.13.0-alpine AS base

# Install compatibility libraries and pnpm globally
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@10.0.0

# Set the working directory inside the container
WORKDIR /app

# 2. Create a separate stage for dependency installation
FROM base AS deps

# Copy lock files and package manager configuration files to the container
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install dependencies based on the available lock file
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    pnpm i; \
  else \
  # elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  # Allow install without lockfile for flexibility in examples
    echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && pnpm i; \
  fi

# 3. Create the build stage
FROM base AS builder
# Set the working directory (again, as each stage is isolated)
WORKDIR /app

# Copy installed dependencies from the `deps` stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application files
COPY . .
COPY .env.development.sample .env.production

# Disable Next.js telemetry collection
ENV NEXT_TELEMETRY_DISABLED 1

# 4. Command to start the development server
CMD ["pnpm", "dev"]
