const JWt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UsersModule = require('../../Models/UsersModel');

const GetAllUser = asyncHandler(async (req, res) => {

    try {
        const users = await UsersModule.find();
        res.status(201).json(users)

    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})

const RegisterUser = asyncHandler(async (req, res) => {

    const { full_name, email, phone, password } = req.body
    //  check if all fields exists
    if (!full_name || !email || !phone || !password) {
        res.status(401)
        throw new Error("please add all fields")
    }
    // check if user exists
    const UserExists = await UsersModule.findOne({ email })

    if (UserExists) {
        res.status(401).json({ status: "user already exists" })
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(password, salt)
    // create User
    const user = await UsersModule.create({
        full_name,
        email,
        phone,
        password: HashPassword,
    }).catch(err => {
        console.error(err.message)
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400).json({ status: "invalide user data" })
    }
})

const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //  check if all fields exists
    if (!email || !password) {
        res.status(401)
        throw new Error("please add all fields")
    }
    // check if user exists
    const user = await UsersModule.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401).json({ status: "invalide user data" })
    }
})

const generateToken = (id) => {
    return JWt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {
    GetAllUser,
    RegisterUser,
    LoginUser,
    generateToken
}