const Patient = require('../models/patientModel');

// Controller functions for patients

// get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get patient by id
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create a new patient
exports.createPatient = async (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        description: req.body.description,
    });
    try {
        const newPatient = await patient.save();
        res.status(201).json(newPatient);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update a patient
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (req.body.name) {
            patient.name = req.body.name;
        }
        if (req.body.email) {
            patient.email = req.body.email;
        }
        if (req.body.password) {
            patient.password = req.body.password;
        }
        if (req.body.phone) {
            patient.phone = req.body.phone;
        }
        if (req.body.description) {
            patient.description = req.body.description;
        }
        const updatedPatient = await patient.save();
        res.json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete a patient
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        await patient.remove();
        res.json({ message: 'Patient removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}  



