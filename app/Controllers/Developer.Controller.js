const asyncHandler = require('express-async-handler')

const DeveloperModule = require('../Models/DeveloperModel');

exports.GetAllDevelopers = asyncHandler(async (req, res) => {
    
    try {
        const developer = await DeveloperModule.find();
        res.status(201).json(developer)
    
    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})
