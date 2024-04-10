const Prescription = require('../models/prescriptionModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');
const Appointment = require('../models/appointmentModel');


// Controller functions for prescriptions
exports.getAllPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find();
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPrescriptionById = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id);
        res.json(prescription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPrescription = async (req, res) => {
    const prescription = new Prescription(
        {
            doctor : req.params.doctor,
            patient : req.params.patient,
            appointment : req.params.appointment,
            medicines : req.body.medicines,
            tests : req.body.tests,
            followup : req.body.followup,
        }
    )
    try {
        const newPrescription = await prescription.save();
        res.status(201).json(newPrescription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id);
        if (req.body.medicines) {
            prescription.medicines = req.body.medicines;
        }
        if (req.body.tests) {
            prescription.tests = req.body.tests;
        }
        if (req.body.followup) {
            prescription.followup = req.body.followup;
        }
        const updatedPrescription = await prescription.save();
        res.json(updatedPrescription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id);
        await prescription.remove();
        res.json({ message: 'Prescription deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPrescriptionsByDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        const prescriptions = await Prescription.find({ doctor: doctor._id });
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPrescriptionsByPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        const prescriptions = await Prescription.find({patient : patient._id});
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPrescriptionByAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        const prescription = await Prescription.findOne({ appointment: appointment._id });
        res.json(prescription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Path : HospitalWebsite/backend/routes/prescriptionRoutes.js

