const mongoose = require('mongoose');
const HourRaport = require('../schemas/HourRaport');
const Employee = require('../schemas/Employee');

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Get all Hours
 *
 */
const getAllHours = async (req, res) => {
    const hours = await HourRaport.find({});

    return res.status(200).json(hours);
};


/**
 * Get all  raports for one employee
 *
 */
const getAllRaportForOneEmployee = async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(404).json({ error: 'Not valid mongoose id' });
    }

    const employeeRaport = await HourRaport.find({ employee: req.params.employeeId });


    res.status(200).json(employeeRaport);
};


/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Get one Hour Raport
 *
 */
const getOneHourRaport = async (req, res) => {
    const { hoursId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(hoursId)) {
        return res.status(404).json({ error: 'Not mongoose id' });
    }

    const hours = await HourRaport.findById({ _id: req.params.hoursId }).populate('employee');

    if (!hours) {
        return res.status(404).json({ error: 'No hours with that id' });
    }

    res.status(200).json(hours);
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * add new Hour Raport
 *
 */
const addNewHours = async (req, res) => {

    const { employee, year, month, monthRaport, sentIn, accepted } = req.body

    try {
        const hours = await HourRaport.create({
            employee, year, month, monthRaport, sentIn, accepted
        });

        res.status(200).json(hours);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * Update Hour Raport
 *
 */
const updateHourRaport = async (req, res) => {
    const { hoursId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(hoursId)) {
        return res.status(404).json({ error: 'Not valid mongoose id' });
    }
    let thingsToUpdate = {

    };

    try {
        await HourRaport.findByIdAndUpdate(hoursId, thingsToUpdate);
        const hours = await HourRaport.findById(hoursId);

        res.status(200).json(hours);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * arrow func to delete a Hour raport
 * @param {*} req
 * @param {*} res
 * @returns
 */

const deleteHourRaport = async (req, res) => {
    const { hoursId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(hoursId)) {
        return res.status(404).json({ error: 'Not valid mongoose id' });
    }

    const hours = await HourRaport.findByIdAndRemove(hoursId);

    if (!hours) {
        return res.status(404).json({ error: 'No such id' });
    }

    res.status(204).json();
};


module.exports = {
    getAllHours,
    getOneHourRaport,
    addNewHours,
    updateHourRaport,
    deleteHourRaport,
    getAllRaportForOneEmployee
}