const express = require('express');
const { body, validationResult, Result } = require('express-validator');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vestu = require('./models/index');

// Initialize Express App
const app = express();
const PORT = 3000;

// connect to mongoDB
const dbURI = 'mongodb+srv://uniproject08:abc12345%23@cluster0.yubklsz.mongodb.net/vestu?retryWrites=true&w=majority&appName=cluster0';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Static Files 
app.use(express.static('public')); // Serve static files

// middlewares 
app.use(morgan('dev'));

// Home Route
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/views/index.html');
  //res.render('home'); 
});

