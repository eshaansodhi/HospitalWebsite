const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

// routes for medicines
router.get('/medicines', medicineController.getAllMedicines);
router.get('/medicines/:id', medicineController.getMedicineById);
router.post('/medicines', medicineController.createMedicine);
router.put('/medicines/:id', medicineController.updateMedicine);    
router.delete('/medicines/:id', medicineController.deleteMedicine);

module.exports = router;
