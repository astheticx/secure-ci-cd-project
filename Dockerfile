FROM node:12

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json (from project root)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy backend and frontend into container
COPY backend ./backend
COPY frontend ./frontend

# 6. Expose backend port
EXPOSE 3000

CMD ["node", "backend/server.js"]
