const pool = require('../../db');
const queries = require('./queries');
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id] , (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { id, name, email } = req.body;
    // check if email already exists
    pool.query(queries.checkIfEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists')
        } else {
            pool.query(queries.addStudent, [id ,name, email], (error, results) => {
                if (error) throw error;
                res.status(201).send(`Student with id:${id} details added successfully`);
        })
        } 
        
    })
}

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student info. does not exists in database');
        }
        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send(`Student info with id:${id} deleted successfully`);
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student info. does not exists in database');
        }
        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student info. updated successfully!!');
        })
    });
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
}