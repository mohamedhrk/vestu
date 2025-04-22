# Vestu Project Documentation

## Overview
This project is a full-stack eCommerce application built using **Node.js**, **Express**, **MongoDB**, and plain **HTML/CSS** for the frontend. The application provides features such as product listing, user authentication, shopping cart functionality, order management, and an admin dashboard.

The project is divided into multiple modules, each responsible for specific functionalities. Below is a detailed breakdown of the project structure, setup instructions, API endpoints, and features.

---

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [API Endpoints](#api-endpoints)
5. [Frontend Pages](#frontend-pages)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features
The eCommerce application includes the following features:
- **Home Page**: Display featured products, categories, and banners.
- **Product Listing**: Browse products by category or search term.
- **Product Details**: View product details, reviews, and add items to the cart.
- **Shopping Cart**: Manage items in the cart, update quantities, and proceed to checkout.
- **User Authentication**: Register, log in, and manage user profiles.
- **Checkout**: Place orders and view order history.
- **Admin Dashboard**: Manage products, view orders, and perform CRUD operations on products.

---

## Project Structure
The project is organized into the following folders:

```
/eCommerce-Project
  ├── /models            # Mongoose schemas and models (e.g., Product, User, Order)
  ├── /routes            # API routes for handling requests
  │     ├── api.js       # General API routes
  │     ├── auth.js      # Authentication routes
  │     ├── admin.js     # Admin-specific routes
  ├── /public            # Static files (HTML, CSS, JavaScript)
  │     ├── index.html   # Home page
  │     ├── styles.css   # CSS for styling
  │     └── script.js    # Frontend JavaScript for API calls
  ├── app.js             # Entry point for the server
  ├── package.json       # Project dependencies and scripts
  ├── .env               # Environment variables (e.g., MongoDB URI, JWT secret)
  └── README.md          # Project documentation
```

---

## Setup Instructions
Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local instance or cloud-hosted via MongoDB Atlas)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedhrk/vestu.git
   cd eCommerce-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints
Below is a list of all available API endpoints:

### **Products**
- `GET /api/products`: Get all products.
- `GET /api/products?search=word`: Search products by name or keyword.
- `GET /api/products?category=categoryName`: Filter products by category.
- `GET /api/products/featured`: Get featured products.
- `GET /api/products/:id`: Get product details by ID.
- `POST /api/products/:id/reviews`: Add a review to a product.
- `GET /api/products/:id/reviews`: Get reviews for a product.

### **Cart**
- `GET /api/cart`: Get the current user's cart.
- `POST /api/cart`: Add a product to the cart.
- `PUT /api/cart/:itemId`: Update the quantity of a cart item.
- `DELETE /api/cart/:itemId`: Remove a product from the cart.

### **Authentication**
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user (returns a JWT token).
- `GET /api/user/profile`: Get the logged-in user's profile.
- `PUT /api/user/profile`: Update the logged-in user's profile.

### **Orders**
- `POST /api/orders`: Create a new order.
- `GET /api/orders/user`: Get the logged-in user's order history.

### **Admin**
- `GET /api/admin/products`: Get all products (admin only).
- `POST /api/admin/products`: Add a new product (admin only).
- `PUT /api/admin/products/:id`: Update a product (admin only).
- `DELETE /api/admin/products/:id`: Delete a product (admin only).
- `GET /api/admin/orders`: Get all orders (admin only).

---

## Frontend Pages
The frontend consists of static HTML, CSS, and JavaScript files located in the `/public` folder. Below are the main pages:

1. **Home Page (`index.html`)**:
   - Displays featured products, categories, and a banner.
   - Includes a navigation bar with links to login/register and other pages.

2. **Product Listing Page**:
   - Displays a grid of products with filters by category and search functionality.

3. **Product Details Page**:
   - Shows product details, reviews, and an "Add to Cart" button.

4. **Cart Page**:
   - Displays items in the cart, allows updating quantities, and provides a "Checkout" button.

5. **Login/Register Page**:
   - Allows users to log in or register.

6. **Checkout Page**:
   - Collects shipping information and places an order.

7. **User Profile Page**:
   - Displays user information and order history.

8. **Admin Dashboard**:
   - Provides tools for managing products and viewing orders.

---

## Contributing
We welcome contributions to improve this project! To contribute:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

