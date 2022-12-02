const getStudents = 'SELECT * FROM students';
const getStudentById = 'SELECT * FROM  students WHERE id= $1';
const checkIfEmailExists = 'SELECT s FROM students s WHERE s.email=$1';
const addStudent = 'INSERT INTO students (id, name, email) VALUES ($1, $2, $3)';
const removeStudent = 'DELETE  FROM  students WHERE id= $1';
const updateStudent = 'UPDATE students SET name= $1 WHERE id = $2'
module.exports = {
    getStudents,
    getStudentById,
    checkIfEmailExists,
    addStudent,
    removeStudent,
    updateStudent
}