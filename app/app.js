const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

// Initialize DB
require('./config/db')();

const UsersRoute = require('./Routes/Users.route');
const EmployeeRoute = require('./Routes/Employee.route');
app.use('/Api', UsersRoute, EmployeeRoute);


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