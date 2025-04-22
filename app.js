const express = require('express');
const morgan = require('morgan');

// Initialize Express App
const app = express();
const PORT = 3000;

// Register View Engine
app.set('view engine', 'ejs');

// Middleware & Static Files
app.use(express.static('public')); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(morgan('dev')); // Log HTTP requests

// Custom Middleware
app.use((req, res, next) => {
  res.locals.path = req.path; // Attach current path to locals for templates
  next();
});

// Home Route
app.get('/', (req, res) => {
  const featuredProducts = [
    {
      name: "Essential White T-Shirt",
      category: "Everyday Basics",
      price: 29,
      image: "" 
    },
    {
      name: "Slim Fit Jeans",
      category: "Denim Collection",
      price: 49,
      image: ""
    }
  ];
  res.render('home', { products: featuredProducts }); // Render the home.ejs template
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});