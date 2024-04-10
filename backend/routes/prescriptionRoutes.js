const express = require('express')
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController')

// routes for prescriptions
router.get('/prescriptions', prescriptionController.getAllPrescriptions)
router.get('/prescriptions/:id', prescriptionController.getPrescriptionById)
router.post('/prescriptions', prescriptionController.createPrescription)
router.put('/prescriptions/:id', prescriptionController.updatePrescription)
router.delete('/prescriptions/:id', prescriptionController.deletePrescription)

module.exports = router
