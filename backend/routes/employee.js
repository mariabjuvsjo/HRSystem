const express = require('express');
const router = express.Router();

const { getAllEmployees, getOneEmployee, addNewEmployee, updateOneEmployee, deleteOneEmployee } = require("../controllers/employee")

/**
 * get route for getting all employees
 */
router.get('/', getAllEmployees);

/**
 * get route for getting one Employee
 */
router.get('/:employeeId', getOneEmployee);

/**
 * post route for adding new employee
 */
router.post('/', addNewEmployee);

/**
 * put route for update one employee
 */
router.put('/:employeeId', updateOneEmployee);

/**
 * Delete route for deleting one employee
 */
router.delete('/:employeeId', deleteOneEmployee);




module.exports = router;
