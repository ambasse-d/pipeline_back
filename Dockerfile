FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ /app/
RUN npm run build \
    && npm prune --production
# CMD ["npm", "run", "start:prod", "--host", "0.0.0.0"]