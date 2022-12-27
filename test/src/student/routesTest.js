const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const res = require('express/lib/response.js');
let server = require('../../../server.js');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('CRUD Api', () => {
    describe('GET /api/v1/students', () => {
        it('It should GET all the student details', (done) => {
            chai.request(server)
                .get('/api/v1/students')
                .end((err, response)=> {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                })
            done();
        });
        it("It should NOT GET all the student details", (done) => {
            chai.request(server)
                .get('/api/v1/student')
                .end((err, response) => {
                    response.should.have.status(404);
                });
            done();
        });
    });
    describe('GET /api/v1/:id ', () => {
        it('It should GET student details by id', (done) => {
            const id = 1;
            chai.request(server).get('/api/v1/students/' + id)
                .end((err, response)=> {
                    response.should.have.status(200);
                    expect(response.body).to.be.an('array');
                })
            done();
        });
        it("It should NOT GET the student details by Id", (done) => {
            const id = 652;
            chai.request(server)
                .get('/api/v1/students/' + id)
                .end((err, response) => {
                    expect(response).status(200);
                });
            done();
        });
    });
    describe('POST  /api/v1/addStudent', () => {
        it.skip('It should create the student details', (done) => {
            const student  = {
                "id" : 129,
                "name" : "chikqqii",
                "email" : "chakqii@gmail.com"
            };
            chai.request(server).post('/api/v1/students/addStudent')
                .send(student)
                .end((err, response)=> {
                    expect(response).status(201);
                })
            done();
        });
        it('It should NOT create the student details', (done) => {
            const student  = {
                "email" : "chaki@gmail.com"
            };
            chai.request(server).post('/api/v1/students/addStudent')
                .send(student)
                .end((err, response)=> {
                    expect(response).status(200);
                    expect('Email already exists').to.be.a('string');
                })
            done();
        });
    });
    describe('PUT  /api/v1/:id', () => {
        it('It should update the student details', (done) => {
            const id = 2;
            const student  = {
                "name" : "updatedName"
            };
            chai.request(server).put('/api/v1/students/' + id)
                .send(student)
                .end((err, response)=> {
                    expect(response).status(200);
                    expect('Student info. updated successfully!!').to.be.a('string');
                })
            done();
        });
        it('It should NOT update the student details', (done) => {
            const id = 1000;
            chai.request(server).put('/api/v1/students/' + id)
                .end((err, response)=> {
                    expect('Student info. does not exists in database').to.be.a('string');
                })
            done();
        });
    });
    describe('DELETE  /api/v1/:id', () => {
        it.skip('It should delete the student details', (done) => {
            const id = 12;
            chai.request(server).delete('/api/v1/students/' + id)
                .end((err, response)=> {
                    expect(response).status(200);
                    expect(`Student info with id:${id} deleted successfully`).to.be.a('string');
                })
            done();
        });
        it('It should NOT delete the student details', (done) => {
            const id = 1000;
            chai.request(server).delete('/api/v1/students/' + id)
                .end((err, response)=> {
                    expect(response).status(404);
                    expect('Student info. does not exists in database').to.be.a('string');
                })
            done();
        });
    });
})