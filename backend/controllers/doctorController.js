const Doctor = require('../models/Doctor');

// Controller functions for doctors

// get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get doctor by id
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create a new doctor
exports.createDoctor = async (req ,res) => {
    const doctor = new Doctor({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        department : req.body.department,
        phone : req.body.phone
    })
    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update a doctor
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (req.body.name) {
            doctor.name = req.body.name;
        }
        if (req.body.email) {
            doctor.email = req.body.email;
        }
        if (req.body.password) {
            doctor.password = req.body.password;
        }
        if (req.body.department) {
            doctor.department = req.body.department;
        }
        if (req.body.phone) {
            doctor.phone = req.body.phone;
        }
        const updatedDoctor = await doctor.save();
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete a doctor
exports.deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndRemove(req.params.id);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
