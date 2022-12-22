
const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model(
    "User",
    new mongoose.Schema({

        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        email: {
            type: String,
            required: [true, 'Please add a email'],
            trim: true,
            lowercase: true,
            unique: true,
            validate(value) {
                return validator.isEmail(value);
            },
        },

        phone: {
            type: String,
            required: [true, 'Please add a phone number']
        },

        password: {
            type: String,
            required: true,
        },
    })
);

module.exports = User;