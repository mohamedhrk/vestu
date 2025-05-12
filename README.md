Here's a polished and professional `README.md` file tailored for your **Vestu** project structure and tech stack. It's clean, beginner-friendly, and ready to drop into your repository:

---

```markdown
# 🌟 Vestu – A Modern E-commerce Platform

**Vestu** is a full-stack e-commerce web application designed with a focus on simplicity, performance, and clean design. It allows users to browse products, manage their shopping cart, authenticate securely, and place orders, while providing an admin interface for managing the product catalog and monitoring orders.

> 🚀 Built as part of a college project exploring modern web development with **Node.js**, **MongoDB**, and **Vanilla JavaScript**.

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB + Mongoose

---

## ✨ Features

### 🏠 Home Page & Navigation *(Nouran)*
- Featured products & hero section
- Category browsing & responsive navbar
- Footer with helpful links

### 🛍️ Product Listing & Search *(Menna)*
- Grid-based product catalog
- Category filters & keyword search
- Links to detailed product views

### 📄 Product Details *(Marvi)*
- Detailed product info: price, size, colors
- Add to cart functionality
- Review section

### 🛒 Cart Functionality *(Shahd)*
- Add, update, and remove items
- Quantity, size, and color management
- Checkout shortcut

### 🔐 User Authentication *(Abdo)*
- Register and login securely with JWT
- Access protected routes
- Session-based UI state

### 💳 Checkout System *(Malak)*
- Shipping and payment info collection
- Order submission

### 👤 Profile & Orders *(Merna)*
- Edit user details
- View order history and statuses

### 🛠️ Admin Dashboard *(Hagag)*
- Admin-only routes with middleware protection
- Product and order management

---

## 📁 Project Structure

```

/vestu
├── .vscode/                      # VS Code config
│
├── BackEnd/                      # Backend server (Node.js + Express)
│   ├── controllers/              # Route logic
│   ├── middleware/               # Auth & error handling
│   ├── models/                   # Mongoose schemas
│   ├── routes/                   # API routes
│   └── app.js                    # Entry point
│
├── FrontEnd/                     # Frontend UI
│   ├── images/                   # Image assets
│   ├── admindashboard.html       # Admin panel
│   ├── authP.html                # Login/register
│   ├── cart.html                 # Shopping cart
│   ├── index.html                # Homepage
│   ├── product.html              # Single product
│   ├── products.html             # Product listing
│   ├── profile.html              # User profile
│   ├── profile-styles.css        # CSS for profile
│   └── styles.css                # Main styles

````

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mohamedhrk/vestu.git
cd vestu
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `BackEnd` directory:

```env
MONGO_URI=mongodb+srv://uniproject08:abc12345%23@cluster0.yubklsz.mongodb.net/vestu?retryWrites=true&w=majority&appName=cluster0
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Server

```bash
npm run dev
```

> Visit [http://localhost:3000](http://localhost:3000) in your browser

---

## 📡 API Endpoints

### Auth

* `POST /api/auth/register` – Register new users *(Abdo)*
* `POST /api/auth/login` – Authenticate users *(Abdo)*

### User

* `GET /api/user/profile` – Get user info *(Merna)*
* `PUT /api/user/profile` – Update profile *(Merna)*

### Products

* `GET /api/products` – Get all products *(Menna)*
* `GET /api/products/:id` – Product by ID *(Marvi)*
* `POST /api/products/:id/reviews` – Add review *(Marvi)*

### Cart

* `GET /api/cart` – View cart *(Shahd)*
* `POST /api/cart` – Add to cart *(Shahd)*
* `PUT /api/cart/:itemId` – Update cart item *(Shahd)*
* `DELETE /api/cart/:itemId` – Remove item *(Shahd)*

### Orders

* `POST /api/orders` – Place order *(Malak)*
* `GET /api/orders/user` – User orders *(Merna)*

### Admin

* `GET /api/admin/products` – View all products *(Hagag)*
* `POST /api/admin/products` – Add new product *(Hagag)*
* `PUT /api/admin/products/:id` – Update product *(Hagag)*
* `DELETE /api/admin/products/:id` – Delete product *(Hagag)*

---

## 🧩 Data Models Overview

### `Product.js`

* `name`, `description`, `price`, `category`, `images`, `reviews`

### `User.js`

* `username`, `email`, `password`, `cart`, `orders`

### `Order.js`

* `userId`, `products`, `shippingAddress`, `paymentMethod`, `paymentId`, `status`

### `Review.js`

* `userId`, `rating`, `comment`, `createdAt`

### `Cart.js`

* `productId`, `quantity`, `size`, `color`

---

## 👥 Contributors

| Name   | Responsibility           |
| ------ | ------------------------ |
| Nouran | Home Page & Navigation   |
| Menna  | Product Listing & Search |
| Marvi  | Product Details          |
| Shahd  | Cart Functionality       |
| Abdo   | User Authentication      |
| Malak  | Checkout Flow            |
| Merna  | Profile & Orders         |
| Hagag  | Admin Dashboard          |

---

## 📌 License

This project is for educational purposes only. No commercial use is intended.
