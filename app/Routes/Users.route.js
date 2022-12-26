const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/Users.Controller');

//Get a list of all products
router.get('/GetAllUsers', UsersController.GetAllUser)
router.post('/RegisterUsers', UsersController.RegisterUser)

module.exports = router;