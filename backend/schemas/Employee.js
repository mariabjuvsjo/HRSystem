const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    address: String,
    country: String,
    personalNumber: Number,
    workingNumber: Number,
    salary: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee