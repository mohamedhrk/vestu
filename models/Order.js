const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  items: [{
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product", 
      required: true 
    },
    quantity: { 
      type: Number, 
      required: true 
    },
    priceAtPurchase: { 
      type: Number 
    } // Snapshot of price during checkout
  }],
  total: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "processing", "shipped", "delivered"], 
    default: "pending" 
  },
  shippingAddress: { 
    type: String 
  }, // Simplified to a single string
  paymentId: { 
    type: String 
  }, // Stripe/PayPal transaction ID
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Order", orderSchema);