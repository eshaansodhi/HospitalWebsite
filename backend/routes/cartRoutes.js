const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// routes for cart
router.get('/cart', cartController.getAllCartItems);
router.get('/cart/:id', cartController.getCartItemById);
router.post('/cart', cartController.createCartItem);
router.put('/cart/:id', cartController.updateCartItem);
router.delete('/cart/:id', cartController.deleteCartItem);

module.exports = router;
// Path: HospitalWebsite/backend/routes/index.js