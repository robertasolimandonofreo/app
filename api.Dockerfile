FROM node:18.18-alpine
WORKDIR /app
COPY pg/ .
RUN npm install
EXPOSE 3009
CMD ["npm", "start"]