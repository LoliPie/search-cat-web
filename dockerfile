FROM node
ADD . /app/
EXPOSE 5000
WORKDIR /app
RUN npm install
CMD ["npm", "run", "serve"]
