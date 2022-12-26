
const mongoose = require('mongoose')

const Developer = mongoose.model(
    "Developer",
    new mongoose.Schema({

        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        city: {
            type: String,
            required: [true, 'Please add a City'],
        },

        job_title: {
            type: String,
            required: [true, 'Please add a Job Title'],
        },

        Annual_Salary: {
            type: String,
            required: [true, 'Please add a Annual Salary'],
        },

        Monthly_Pay: {
            type: String,
            required: [true, 'Please add a Monthly Pay'],
        },

        Weekly_Pay: {
            type: String,
            required: [true, 'Please add a Weekly Pay'],
        },
        
        Hourly_Pay: {
            type: String,
            required: [true, 'Please add a Hourly Pay'],
        },
    })
);

module.exports = Developer;