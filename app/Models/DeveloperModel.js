
const mongoose = require('mongoose')

const Developer = mongoose.model(
    "Developer",
    new mongoose.Schema({

        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        country: {
            type: String,
            required: [true, 'Please add a country'],
        },

        city: {
            type: String,
            required: [true, 'Please add a city'],
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
    })
);

module.exports = Developer;