const Appointment = require('../models/appointmentModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

// Controller functions for appointments

// get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get appointment by id
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create a new appointment
exports.createAppointment = async (req, res) => {
    const appointment = new Appointment({
        doctor: req.body.doctor,
        patient: req.body.patient,
        date: req.body.date,
        slot: req.body.slot,
        status: req.body.status
    });
    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update an appointment
exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (req.body.doctor) {
            appointment.doctor = req.body.doctor;
        }
        if (req.body.patient) {
            appointment.patient = req.body.patient;
        }
        if (req.body.date) {
            appointment.date = req.body.date;
        }
        if (req.body.slot) {
            appointment.slot = req.body.slot;
        }
        if (req.body.status) {
            appointment.status = req.body.status;
        }
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete an appointment
exports.deleteAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDoctorAppointments = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        const appointments = await Appointment.find({ doctor: doctor._id });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getPatientAppointments = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        const appointments = await Appointment.find({ patient: patient._id });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getDoctorAppointmentsByDate = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        const appointments = await Appointment.find({ doctor: doctor._id, date: req.params.date });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getPatientAppointmentsByDate = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        const appointments = await Appointment.find({ patient: patient._id, date: req.params.date });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



