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

exports.CreateDeveloper = asyncHandler(async (req, res) => {
    const { full_name, country, city, job_title, department, business_unit, Annual_Salary } = req.body

    //  check if all fields exists
    if (!full_name || !country || !city || !job_title || !department || !business_unit || !Annual_Salary) {
        res.status(401)
        throw new Error("please add all fields")
    }

    // check if developer exists
    const DeveloperExists = await DeveloperModule.findOne({ full_name })

    if (DeveloperExists) {
        res.status(401).json({ status: "developer already exists" })
    }

    const developer = await DeveloperModule.create({
        full_name,
        country,
        city,
        job_title,
        department,
        business_unit,
        Annual_Salary,
    }).catch(err => {
        console.error(err.message)
    })

    if (developer) {
        res.status(201).json({
            _id: developer.id,
            full_name: developer.full_name,
            country: developer.country,
            city: developer.city,
            job_title: developer.job_title,
            department: developer.department,
            business_unit: developer.business_unit,
            Annual_Salary: developer.Annual_Salary,
        })
    } else {
        res.status(400).json({ status: "invalide developer data" })
    }
})
