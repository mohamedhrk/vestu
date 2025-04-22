const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  permissions: [{
    type: String, 
    enum: ["manage_products", "manage_users", "view_analytics"] 
  }],
  activityLog: [{
    action: String, // E.g., "product_deleted"
    timestamp: { 
      type: Date, 
      default: Date.now 
    }
  }]
});

module.exports = mongoose.model("Admin", adminSchema);