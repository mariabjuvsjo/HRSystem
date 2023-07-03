const express = require('express');
const router = express.Router();

const hours = require("../controllers/hourRaport")

/**
 * get route for getting all hour raports
 */
router.get('/', hours.getAllHours);

/**
 * get route for getting one hour raport
 */
router.get('/:hoursId', hours.getOneHourRaport);

/**
 * get route for getting all raport from one employee
 */
router.get('/employee/:employeeId', hours.getAllRaportForOneEmployee);

/**
 * post route for adding new hours to a employee
 */
router.post('/', hours.addNewHours);

/**
 * put route for update one hours
 */
router.put('/:hoursId', hours.updateHourRaport);

/**
 * Delete route for deleting one hours
 */
router.delete('/:hoursId', hours.deleteHourRaport);




module.exports = router;