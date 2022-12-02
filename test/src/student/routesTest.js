const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../../../server.js');


//Assertion style
chai.should();

chai.use(chaiHttp);

describe('CRUD Api', () => {
    describe('GET /api/v1/students', () => {
        it('It should GET all the student details', (done) => {
            chai.request(server).get('/api/v1/students')
                .end((err, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                })
            done();
        });

        it("It should NOT GET all the student details", (done) => {
            chai.request(server)
                .get('/api/v1/students')
                .end((err, response) => {
                    response.should.have.status(404);
                });
                done();
        });


    });

    describe('GET /api/v1/:id ', () => {
        it('It should GET student details by id', (done) => {
            const id = 10;
            chai.request(server).get('/api/v1/students/' + id)
                .end((err, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                })
            done();
        });

        it("It should NOT GET the student details by Id", (done) => {
            const id = 10;
            chai.request(server)
                .get('/api/v1/students/' + id)
                .end((err, response) => {
                    response.should.have.status(404);
                });
                done();
        });


    });

    describe('POST  /api/v1/addStudent', () => {
        it('It should create the student details', (done) => {
            const student  = {
                "id" : 12,
                "name" : "uday",
                "email" : "asfd"
            };
            chai.request(server).post('/api/v1/students/addStudent')
                .send(student)
                .end((err, response)=> {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('name').eq("uday");
                })
            done();
        });

    });
})