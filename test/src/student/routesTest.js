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
                    expect('hello');
                })
            done();
        })
    })
})