# FlexiRent-backend
Backend service for FlexiRent, a rental platform that enables users to rent vehicles (and later other items like gadgets, etc.) from different providers.  
It provides role-based access for **Users**, **Providers**, and **Admins** with secure authentication, authorization, and data management.  

## 📌 Features
- User authentication & authorization with **JWT**
- Role-based access (Admin, Provider, User)
- CRUD operations for vehicle listings
- Users can browse vehicles & request bookings
- Providers approve/decline booking requests
- Admin: manage users and providers
- Centralized error handling & input validation with **Zod**

## 🛠 Tech Stack
- Node.js + Express.js (Backend Framework)
- MongoDB + Mongoose (Database)
- JWT (Authentication)
- Zod (Validation)
- Middleware-based request handling
- Bcrypt (Password hashing)

## 📂 Project Structure
``` bash
FlexiRent-backend/
│── .env                  # Environment variables
│── server.js             # Entry point
│── package.json
│
├── src/
    ├── config/           # DB connection
    ├── models/           # Mongoose schemas
    ├── routes/           # API routes
    ├── controllers/      # Business logic
    ├── middlewares/      # Auth, error handling
    ├── validations/      # Zod schemas
    └── utils/            # Helpers (JWT, hashing)
```

## 🚀 Getting Started

### 1. Clone the repo
``` bash
git clone https://github.com/AmiteshRanjan24/FlexiRent-backend.git
cd FlexiRent-backend
```

### 2. Install dependencies
``` bash
npm install
```

### 3. Setup environment variables
   Create a .env file in the root directory and configure it like:
``` bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

#### 4. Run the server
``` bash
npm run dev
```


## 📌 API Endpoints

### Auth
- POST /auth/register → Register (user/provider)
- POST /auth/login → Login & get token

### Users
- GET /users/me → Get logged-in user profile

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

## 🧪 Testing
- Use Postman or Thunder Client to test APIs.

## 📜 License
- This project is licensed under the MIT License. 

## 🤝 Contributing
- Contributions are welcome! Feel free to fork the repo, create a branch, and submit a pull request.
