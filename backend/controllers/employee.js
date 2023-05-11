const mongoose = require('mongoose');
const Employee = require('../schemas/Employee');

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Get all Employees
 *
 */
const getAllEmployees = async (req, res) => {
    const employees = await Employee.find({});

    return res.status(200).json(employees);
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Get one Employee
 *
 */
const getOneEmployee = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ error: 'Not mongoose id' });
    }

    const employee = await Employee.findById({ _id: req.params.employeeId });

    if (!employee) {
        return res.status(404).json({ error: 'No Employee with that id' });
    }

    res.status(200).json(employee);
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * add new Employee
 *
 */
const addNewEmployee = async (req, res) => {
    const { firstName,
        lastName,
        email,
        phoneNumber,
        address,
        country,
        personalNumber,
        workingNumber,
        salary,
        accountNumber,
        bank } = req.body;

    try {
        const employee = await Employee.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            country,
            personalNumber,
            workingNumber,
            salary,
            accountNumber,
            bank
        });

        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Update a Employee
 *
 */
const updateOneEmployee = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ error: 'Not valid mongoose id' });
    }
    let thingsToUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        country: req.body.country,
        personalNumber: req.body.personalNumber,
        workingNumber: req.body.workingNumber,
        salary: req.body.salary,
        accountNumber: req.body.accountNumber,
        bank: req.body.bank
    };

    try {
        await Employee.findByIdAndUpdate(employeeId, thingsToUpdate);
        const employee = await Employee.findById(employeeId);

        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * arrow func to delete a Employee
 * @param {*} req
 * @param {*} res
 * @returns
 */

const deleteOneEmployee = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ error: 'Not valid mongoose id' });
    }

    const employee = await Employee.findByIdAndRemove(employeeId);

    if (!employee) {
        return res.status(404).json({ error: 'No such id' });
    }

    res.status(204).json();
};


module.exports = {
    getAllEmployees,
    getOneEmployee,
    addNewEmployee,
    updateOneEmployee,
    deleteOneEmployee
}