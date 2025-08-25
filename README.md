# FlexiRent-backend

Backend service for FlexiRent, a rental platform that enables users to rent vehicles (and later other items like gadgets, etc.) from different providers.  
It provides role-based access for **Users** and **Providers** with secure authentication, authorization, and data management.

## ✨ Features

- 🔑 **Authentication & Authorization**
  - Secure JWT-based login & signup
  - Role-based access control (`user` vs `provider`)
- 👥 **User Management**
  - Register, login, manage profile
  - Role assignment (`user` / `provider`)
- 🚘 **Vehicle Management** (Provider only)
  - Add, update, delete, and view vehicles
- 📖 **Booking Management**
  - Users can create & view bookings
  - Providers can approve/decline bookings
- ✅ **Validation**
  - All request payloads validated using **Zod**
- 🛡️ **Security**
  - Passwords hashed with **bcrypt**
  - JWT token verification middleware
- 📂 **Clean Project Structure**
  - Config, Models, Controllers, Routes, Middlewares, Validations, Utils

## 🛠 Tech Stack

- Node.js + Express.js (Backend Framework)
- MongoDB + Mongoose (Database)
- JWT (Authentication)
- Zod (Validation)
- Middleware-based request handling
- Bcrypt (Password hashing)

## 📂 Project Structure

```bash
FlexiRent-backend/
│── .env                  # Environment variables
│── server.js             # Entry point
│── package.json
│
├── src/
    ├── app.js            # Express app setup
    ├── config/           # DB connection
    ├── models/           # Mongoose schemas
    ├── routes/           # API routes
    ├── controllers/      # Business logic
    ├── middlewares/      # Auth, error handling, role-based access
    ├── validations/      # Zod schemas
    └── utils/            # Helpers (JWT, hashing, responses)
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AmiteshRanjan24/FlexiRent-backend.git
cd FlexiRent-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a .env file in the root directory and configure it like:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

#### 4. Run the server

```bash
npm run dev
```

## 📌 API Endpoints

### Auth

- POST /auth/register → Register (user/provider)
- POST /auth/login → Login & get token
- GET /auth/me → Get logged-in user profile
- POST /auth/logout → Logout

### Users

- GET /users → Get all users
- GET /users/:id → Get user by ID
- POST /users → Create user
- PUT /users/:id → Update user
- DELETE /users/:id → Delete user

### Vehicles

- POST /vehicles → Create vehicle (Provider only)
- GET /vehicles → Get all vehicles (Public)
- GET /vehicles/:id → Get vehicle details
- PUT /vehicles/:id → Update vehicle (Provider only)
- DELETE /vehicles/:id → Delete vehicle (Provider only)

### Bookings

- POST /bookings → Create booking (User only)
- GET /bookings → Get user’s/provider’s bookings
- PUT /bookings/:id/status → Provider approves/declines
- PUT /bookings/:id/complete → Mark as completed
- DELETE /bookings/:id → Delete booking (Provider only)

## 🧪 Testing with Postman

1. Register as User and Provider.
2. Login → copy the JWT token.

3. Use the token in Authorization: header for protected routes.

4. Try out vehicle and booking endpoints with correct roles.

## 📜 License

- This project is licensed under the MIT License.

## 🤝 Contributing

- Contributions are welcome! Feel free to fork the repo, create a branch, and submit a pull request.

## Author

Amitesh Ranjan
