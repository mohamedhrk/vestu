# **Vestu - Modern E-commerce Platform**

**Vestu** is a full-stack e-commerce web application designed for simplicity, elegance, and functionality. It allows users to browse products, manage their cart, place orders, and view order history. The platform also includes an admin dashboard for managing products and monitoring orders. This project was developed as part of a college learning initiative to explore modern web development technologies and concepts.

---

## **Tech Stack**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB (using Mongoose for schema modeling)

---

## **Features**

### 1. **Home Page + Navigation**
   - Displays featured products and categories.
   - Navbar with login/register links, search bar, and cart icon.
   - Hero banner section highlighting seasonal collections and promotions.
   - Footer with links to shopping categories, customer service, and legal information.

### 2. **Product Listing + Search**
   - Product grid with images, names, prices, and descriptions.
   - Category filter and search bar functionality.
   - Redirects to product details page on click.

### 3. **Product Page (Details)**
   - Displays product image, name, description, price, colors, sizes, and reviews.
   - “Add to Cart” functionality.
   - User reviews section with submission functionality.

### 4. **Cart Page**
   - Allows users to view and update cart items (quantity, size, color).
   - Checkout button to proceed to order placement.

### 5. **User Authentication (Login/Register)**
   - Register and login functionality with JWT token management.
   - Protects private routes for logged-in users.

### 6. **Checkout**
   - Users can place orders by providing shipping address and payment ID.

### 7. **User Profile / Order History**
   - View and edit user profile.
   - Displays order history with status updates.

### 8. **Admin Dashboard**
   - Admin panel for managing products and viewing orders.
   - Admin-only routes protected by middleware.

---

## **Installation Instructions**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mohamedhrk/vestu.git
   ```

2. **Install Dependencies**:
   ```bash
   cd vestu
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```bash
   MONGO_URI=mongodb+srv://uniproject08:abc12345%23@cluster0.yubklsz.mongodb.net/vestu?retryWrites=true&w=majority&appName=cluster0
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Server**:
   ```bash
   npm run dev
   ```
   The app will be running at [http://localhost:3000](http://localhost:3000).

---

## **API Documentation**

### **User Routes**
- **POST /api/auth/register** - Register a new user.
- **POST /api/auth/login** - Login a user and receive a JWT token.
- **GET /api/user/profile** - Get user profile (requires authentication).
- **PUT /api/user/profile** - Update user profile.

### **Product Routes**
- **GET /api/products** - Get all products.
- **GET /api/products/:id** - Get product details.
- **GET /api/products/featured** - Get featured products.
- **POST /api/products/:id/reviews** - Add a review.
- **GET /api/products/:id/reviews** - View reviews.

### **Cart Routes**
- **GET /api/cart** - View cart.
- **POST /api/cart** - Add product to cart.
- **PUT /api/cart/:itemId** - Update cart item.
- **DELETE /api/cart/:itemId** - Remove item from cart.

### **Order Routes**
- **POST /api/orders** - Place a new order.
- **GET /api/orders/user** - Get all orders for the logged-in user.

### **Admin Routes**
- **GET /api/admin/products** - View all products (admin only).
- **POST /api/admin/products** - Add a new product (admin only).
- **PUT /api/admin/products/:id** - Edit product details (admin only).
- **DELETE /api/admin/products/:id** - Delete product (admin only).

---

## **Folder Structure**

```
/VESTU
├── controllers
│   ├── productController.js    (Logic for product-related operations)
│   ├── userController.js       (Logic for user-related operations)
│   ├── cartController.js       (Logic for cart-related operations)
│   ├── orderController.js      (Logic for order-related operations)
│   └── adminController.js      (Logic for admin-related operations)
├── models
│   ├── Cart.js
│   ├── index.js
│   ├── Order.js
│   ├── Product.js
│   ├── Review.js
│   └── User.js
├── node_modules
├── public
│   ├── css
│   │   └── styles.css          (Global CSS file)
│   ├── js
│   │   └── script.js           (Global JavaScript file)
│   └── images                  (Static images like logos, placeholders, etc.)
├── routes
│   ├── productRoutes.js        (API routes for products)
│   ├── userRoutes.js           (API routes for user authentication)
│   ├── cartRoutes.js           (API routes for cart management)
│   ├── orderRoutes.js          (API routes for order management)
│   └── adminRoutes.js          (API routes for admin functionality)
├── views
│   ├── partials
│   │   ├── head.ejs            (Reusable <head> section)
│   │   ├── nav.ejs             (Reusable navigation bar)
│   │   └── footer.ejs          (Reusable footer section)
│   ├── home.ejs                (Home page template)
│   ├── products.ejs            (Product listing page)
│   ├── product-detail.ejs      (Product detail page)
│   ├── cart.ejs                (Cart page)
│   ├── login.ejs               (Login page)
│   ├── register.ejs            (Registration page)
│   ├── checkout.ejs            (Checkout page)
│   ├── profile.ejs             (User profile and order history)
│   └── admin-dashboard.ejs     (Admin dashboard)
├── .gitignore
├── app.js                     (Main server file)
├── package.json               (Project dependencies and scripts)
└── package-lock.json
```

---

## **Models**

Each model defines the schema for its respective collection in MongoDB:

1. **`Product.js`**:
   - Represents products with fields like `name`, `description`, `price`, `category`, `images`, and `reviews`.

2. **`User.js`**:
   - Represents users with fields like `username`, `email`, `password`, `cart`, and `orders`.

3. **`Order.js`**:
   - Tracks orders with fields like `userId`, `products`, `shippingAddress`, `paymentMethod`, `paymentId`, and `status`.

4. **`Review.js`**:
   - Stores user reviews for products with fields like `userId`, `rating`, `comment`, and `createdAt`.

5. **`Cart.js`**:
   - Manages cart items with fields like `productId`, `quantity`, `size`, and `color`.

---

## **Contributors**

This project was developed as part of a college learning initiative. Special thanks to the team members who contributed to this project.

