const express = require('express');
const { body, validationResult, Result } = require('express-validator');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vestu = require('./models/index');
const routes = require('./routes/api'); 
const path = require('path');


// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// MongoDB URI
const dbURI = 'mongodb+srv://uniproject08:abc12345%23@cluster0.yubklsz.mongodb.net/vestu?retryWrites=true&w=majority&appName=cluster0';

// MongoDB Connection
mongoose.connect(dbURI)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log('📚 Ready to handle API requests under /api');
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api', routes);

// Home Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
