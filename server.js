require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();

// Import models
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

// Get all products
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
  });
  
  // Add new product
  app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  });

// Routes go here
// We'll add them in next steps

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Admin dashboard backend running on http://localhost:${PORT}`);
});