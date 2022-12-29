const asyncHandler = require('express-async-handler')

const EmployeeModule = require('../Models/EmployeeModel');

const GetAllEmployee = asyncHandler(async (req, res) => {
    
    try {
        const Employee = await EmployeeModule.find();
        res.status(201).json(Employee)
    
    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})

const CreateEmployee = asyncHandler(async (req, res) => {
    const { full_name, country, city, job_title, department, business_unit, Annual_Salary } = req.body

    //  check if all fields exists
    if (!full_name || !country || !city || !job_title || !department || !business_unit || !Annual_Salary) {
        res.status(401)
        throw new Error("please add all fields")
    }

    // check if developer exists
    const EmployeeExists = await EmployeeModule.findOne({ full_name })

    if (EmployeeExists) {
        res.status(401).json({ status: "Employee already exists" })
    }

    const Employee = await EmployeeModule.create({
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

    if (Employee) {
        res.status(201).json({
            _id: Employee.id,
            full_name: Employee.full_name,
            country: Employee.country,
            city: Employee.city,
            job_title: Employee.job_title,
            department: Employee.department,
            business_unit: Employee.business_unit,
            Annual_Salary: Employee.Annual_Salary,
        })
    } else {
        res.status(400).json({ status: "invalide Employee data" })
    }
})

module.exports = {
    GetAllEmployee,
    CreateEmployee,
}