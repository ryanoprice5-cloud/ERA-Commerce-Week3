const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const authorizeRole = require('../middleware/authorizeRole');
const {
    getAllProducts, getProductByCategory, getProductsById, createProduct
} = require('../controllers/productController');

router.get('/', authenticateToken, getAllProducts);
router.get('/category/:categoryId', authenticateToken, getProductByCategory);
router.get('/:id', authenticateToken, getProductsById);
router.post('/', authenticateToken, authorizeRole('admin'), createProduct);

module.exports = router;