# RestApi

Install the node_modules
$ npm install

Nodemon package is installed once the file is saved server will automatically restarts.

# Command for starting the node server

$ npm start

# Command for testing unit testCases

$ npm test

# Server is running on

http://localhost:3400/

# Swagger is running on

http://localhost:3400/swagger-api-docs/#/

# About Database

create students table in postgres db
Add 3 columns: id, name, email

# Dockerization

First create Dockerfile.

create .dockerignore and .gitignore files in that give node_modules.

docker build -t restapi-dockerization .

docker run -it -p 1235:3400 restapi-dockerization

Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container.

docker run -p 1235:3400 -d restapi-dockerization
docker ps -- to check for the container running in background
