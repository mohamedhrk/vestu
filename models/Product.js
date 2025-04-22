const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ["Denim Collection", "Oversized Essentials", "Classic Polo", "Everyday Basics"], 
    required: true 
  },
  images: [{ 
    type: String 
  }], // URLs to hosted images
  stock: { 
    type: Number, 
    default: 0 
  },
  sizes: [{ 
    type: String 
  }], // ["S", "M", "L"]
  colors: [{ 
    type: String, 
    enum: ["Black", "White"] 
  }], // Only Black and White
  featured: { 
    type: Boolean, 
    default: false 
  }, // For homepage highlights
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  } // Admin who added the product
});

module.exports = mongoose.model("Product", productSchema);