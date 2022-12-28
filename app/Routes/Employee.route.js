const express = require('express');
const router = express.Router();

const EmployeeController = require('../Controllers/EmployeeController');

//Get a list of all products
router.get('/GetAllEmployee', EmployeeController.GetAllEmployee)
router.post('/CreateEmployee', EmployeeController.CreateEmployee)

module.exports = router;