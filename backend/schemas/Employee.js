const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    country: String,
    personalNumber: Number,
    workingNumber: Number,
    salary: Number,
    accountNumber: Number,
    bank: String

});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee