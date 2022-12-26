const express = require('express');
const router = express.Router();

const DeveloperController = require('../Controllers/Developer.Controller');

//Get a list of all products
router.get('/GetAllDeveloper', DeveloperController.GetAllDevelopers)

module.exports = router;