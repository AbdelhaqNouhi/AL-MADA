const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/Users.Controller');

//Get a list of all products
router.get('/GetAllUser', UsersController.GetAllUsers)
router.post('/RegisterUser', UsersController.RegisterUser)

module.exports = router;