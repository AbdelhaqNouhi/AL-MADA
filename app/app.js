const createError = require('http-errors');
const dotenv = require('dotenv').config();

const express = require('express')

const app = express();

app.use(express.json());

// Initialize DB
require('./config/db')();

const UsersRoute = require('./Routes/Users.route');
const DevelopersRoute = require('./Routes/Developer.route');
app.use('/Api', UsersRoute, DevelopersRoute);


//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});