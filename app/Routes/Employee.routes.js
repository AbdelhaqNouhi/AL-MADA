const express = require('express');
const router = express.Router();

const {
    GetAllEmployee,
    CreateEmployee
} = require('../Controllers/EmployeeController');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAllEmployee', GetAllEmployee);
    router.post('/CreateEmployee', CreateEmployee);
}