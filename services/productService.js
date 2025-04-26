const Product = require('../models/Product');

async function getProductById(id) {
    return Product.findById(id);
}

async function addReviewToProduct(id, reviewData) {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    product.reviews.push(reviewData);
    await product.save();
    return product;
}

async function getReviewsByProductId(id) {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    return product.reviews;
}

async function addPhotosToProduct(id, photoUrls) {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');

    product.photos.push(...photoUrls);
    await product.save();
    return product;
}


module.exports = {
    getProductById,
    addReviewToProduct,
    getReviewsByProductId,
    addPhotosToProduct
};
