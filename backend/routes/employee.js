const express = require('express');
const router = express.Router();

const { getAllEmployees, getOneEmployee } = require("../controllers/employee")

/**
 * get route for getting all employees
 */
router.get('/', getAllEmployees);

/**
 * get route for getting one Employee
 */
router.get('/:bikeId', getOneEmployee);

/**
 * post route for adding new employy
 */
router.post('/', addNewEmployee);




module.exports = router;
