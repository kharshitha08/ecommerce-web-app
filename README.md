# 🛍️ E-Commerce Web Application

A full-stack e-commerce web application built using **React.js** for the frontend and **Java Spring Boot** for the backend. This application allows users to browse products, add them to a cart, and simulate a simple order placement process.

---

## 📁 Project Structure

```
ecommerce-web-app/
├── frontend/        # React.js frontend
├── backend/         # Spring Boot backend
└── README.md
```

---

## 🚀 Features

- User-friendly UI with product listings
- RESTful API to fetch products
- Cart simulation (frontend-only)
- Spring Boot backend with sample product API
- Responsive design (basic styling)

---

## 🧑‍💻 Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- JavaScript (ES6+)
- CSS / Tailwind (optional)

### Backend:
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL (can be replaced with H2 for testing)

---

## ⚙️ Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs at: `http://localhost:3000`

### Backend Setup

```bash
cd backend
# Configure application.properties with your MySQL credentials
./mvnw spring-boot:run
```

Runs at: `http://localhost:8080/products`

---

## 🔗 API Example

### GET `/products`

Returns:
```json
[
  { "id": "1", "name": "T-Shirt", "price": "499" },
  { "id": "2", "name": "Shoes", "price": "999" },
  { "id": "3", "name": "Watch", "price": "1499" }
]
```

---

## 👩‍💻 Author

- **Harshitha Reddy**
- [LinkedIn](https://www.linkedin.com/in/kharshitha08)
- [GitHub](https://github.com/kharshitha08)

---

## 📄 License

This project is licensed under the MIT License.
