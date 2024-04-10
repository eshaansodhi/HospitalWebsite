const Medicine = require('../models/Medicine');

// Controller functions for medicines

// get all medicines 
exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get medicine by id
exports.getMedicineById = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params,id);
        res.json(medicine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create a new medicine
exports.createMedicine = async (req, res) => {
    const medicine = new Medicine({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
    });
    try {
        const newMedicine = await medicine.save();
        res.status(201).json(newMedicine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update a medicine
exports.updateMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (req.body.name) {
            medicine.name = req.body.name;
        }
        if (req.body.price) {
            medicine.price = req.body.price;
        }
        if (req.body.quantity) {
            medicine.quantity = req.body.quantity;
        }
        if (req.body.description) {
            medicine.description = req.body.description;
        }
        const updatedMedicine = await medicine.save();
        res.json(updatedMedicine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (medicine) {
        await medicine.remove();
        res.json({ message: 'Medicine deleted' });
        } else {
        res.status(404).json({ message: 'Medicine not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

