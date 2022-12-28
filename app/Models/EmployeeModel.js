
const mongoose = require('mongoose')

const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({

        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        job_title: {
            type: String,
            required: [true, 'Please add a Job Title'],
        },

        department: {
            type: String,
            required: [true, 'Please add a Department'],
        },

        business_unit: {
            type: String,
            required: [true, 'Please add a Business Unit'],
        },

        Annual_Salary: {
            type: String,
            required: [true, 'Please add a Annual Salary'],
        },

        country: {
            type: String,
            required: [true, 'Please add a country'],
        },

        city: {
            type: String,
            required: [true, 'Please add a city'],
        },
    })
);

module.exports = Employee;