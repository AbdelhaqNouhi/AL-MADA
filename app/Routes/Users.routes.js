const express = require('express');
const router = express.Router();

const {
    GetAllUser,
    RegisterUser,
    LoginUser
} = require('../Controllers/Auth/UsersController');

//Get a list of all products
router.get('/GetAllUser', GetAllUser)
router.post('/RegisterUser', RegisterUser)
router.post('/', LoginUser)

module.exports = router;