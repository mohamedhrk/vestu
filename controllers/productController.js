const productService = require('../services/productService');

async function getProduct(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addReview(req, res) {
  try {
    const updatedProduct = await productService.addReviewToProduct(req.params.id, req.body);
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getReviews(req, res) {
  try {
    const reviews = await productService.getReviewsByProductId(req.params.id);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProduct,
  addReview,
  getReviews,
};
