# ===============================
# 1. Base stage (common setup)
# ===============================
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# ===============================
# 2. Development stage
# ===============================
FROM base AS development
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]

# ===============================
# 3. Production stage
# ===============================
FROM base AS production
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
