FROM node:18
WORKDIR /app
COPY . .
RUN npm install || true
EXPOSE 8080
CMD ["node", "app.js"]
``
