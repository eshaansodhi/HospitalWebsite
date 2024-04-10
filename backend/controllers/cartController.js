const Cart = require('../models/Cart');
const Patient = require('../models/Patient');
const Medicine = require('../models/Medicine');

// Controller functions for cart

// get cart by patient id

exports.getCartByPatientId = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId);
        const cart = await Cart.findOne({ patient: patient._id });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// add item to cart

exports.addItemToCart = async (req, res) => {
    const {medicineId, quantity} = req.body;
    try {
        const patient = await Patient.findById(req.params.patientId);
        let cart = await Cart.findOne({ patient: patient._id });
        if(!cart) {
            cart = new Cart({ patient: patient._id , items: [] });
        }
        const item = cart.items.find(item => item.medicine == medicineId);
        if(item) {
            item.quantity += quantity;
        } else {
            cart.items.push({ medicine: medicineId, quantity });
        }
        const updatedCart = await cart.save();
        res.status(201).json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update cart item 

exports.updateCartItem = async (req, res) => {
    const {quantity} = req.body;
    try {
        const patient = await Patient.findById(req.params.patientId);
        const cart = await Cart.findOne({ patient: patient._id });
        if(cart){
            const item = cart.items.find(item => item._id == req.params.itemId);
            if(item) {
                item.quantity = quantity;
                const updatedCart = await cart.save();
                res.json(updatedCart);
            } else {
                res.status(404).json({ message: 'Item not found in cart' });
            }
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete cart item

exports.deleteCartItem = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId);
        const cart = await Cart.findOne({ patient: patient._id });
        if(cart){
            cart.items = cart.items.filter(item => item._id != req.params.itemId);
            const updatedCart = await cart.save();
            res.json(updatedCart);
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
