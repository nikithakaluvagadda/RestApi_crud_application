const { json } = require('express');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const app = express();

const studentRoute = require('./src/student/routes.js');

const port = 3400;

app.use(express.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs CRUD project with postgres',
            version : '1.0.0'
        },
        servers: [
            {
                url:'http://localhost:3400/'
            }
        ]
    },
    apis: ['./src/student/routes.js']
}

const swaggerSpec = swaggerJsDoc(options)
app.use('/swagger-api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

app.use('/api/v1/students', studentRoute);
app.listen(port, () => console.log(`CRUD Application is running on ${port}`));
module.exports = app;