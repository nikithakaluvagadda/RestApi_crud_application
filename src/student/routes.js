const { Router } =  require('express') // or
// const router = express.Router;
const controller = require('./controller')
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      getStudents:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              name:
 *                  type: string
 *              email:
 *                  type: string
 */

/**
 * @swagger
 * /api/v1/students:
 *  get:
 *      summary: GET method
 *      description: Fetching the details of students
 *      responses:
 *          200:
 *              description: To test get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/getStudents'
 */
router.get('/', controller.getStudents);


/**
 * @swagger
 * /api/v1/students/addStudent:
 *  post:
 *      summary: POST method
 *      description: POST method used to insert student details
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schemas/getStudents'
 *          
 *      responses:
 *          200:
 *              description: Student details added successfully!!
 */
router.post('/addStudent', controller.addStudent);


/**
 * @swagger
 * /api/v1/students/{id}:
 *  get:
 *      summary: getById method
 *      description: getById method for CRUD App
 *      parameters:
 *          - in : path
 *            name: id
 *            required: true
 *            description: Id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: To test getById method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/getStudents'
 */
router.get('/:id', controller.getStudentById);


/**
 * @swagger
 * /api/v1/students/{id}:
 *  delete:
 *      summary: DELETE method
 *      description: method for deleting student details
 *      parameters:
 *          - in : path
 *            name: id
 *            required: true
 *            description: Id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schemas/getStudents'
 *      responses:
 *          200:
 *              description: Student info. deleted successfully!!
 */
router.delete('/:id', controller.removeStudent);


/**
 * @swagger
 * /api/v1/students/{id}:
 *  put:
 *      summary: PUT method
 *      description: method for updating student name
 *      parameters:
 *          - in : path
 *            name: id
 *            required: true
 *            description: Id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schemas/getStudents'
 *      responses:
 *          200:
 *              description: Student info. updated successfully!!
 */
router.put('/:id', controller.updateStudent);

module.exports = router;