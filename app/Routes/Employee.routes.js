const express = require('express');
const router = express.Router();

const {
    GetAllEmployee,
    CreateEmployee
} = require('../Controllers/EmployeeController');

//Get a list of all products
router.get('/GetAllEmployee', GetAllEmployee)
router.post('/CreateEmployee', CreateEmployee)

module.exports = router;