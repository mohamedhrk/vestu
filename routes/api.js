const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products/:id', productController.getProduct);
router.post('/products/:id/reviews', productController.addReview);
router.get('/products/:id/reviews', productController.getReviews);

module.exports = router;
