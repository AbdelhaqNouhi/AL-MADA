const express = require('express');
const router = express.Router();

const DeveloperController = require('../Controllers/DeveloperController');

//Get a list of all products
router.get('/GetAllDeveloper', DeveloperController.GetAllDevelopers)
router.post('/CreateDeveloper', DeveloperController.CreateDeveloper)

module.exports = router;