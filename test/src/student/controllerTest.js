const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const controller = require('../../../src/student/controller.js');

chai.should();

chai.use(chaiHttp);

describe('getStudents', () => {
    it('should fetch all the details of students', () => {
        const response = controller.getStudents();
        expect(response);
    })
})