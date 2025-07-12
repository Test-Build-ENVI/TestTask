# Task Management API

A complete task management system built with Node.js, Express, and MongoDB.

## Project Structure

```
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── env.example            # Environment variables template
├── models/
│   └── User.js            # User model with mongoose schema
├── controllers
│   └── authController.js  # Authentication logic
├── routes/
    └── index.js
│   └── authRoutes.js      # Authentication routes
├── middleware/
│   ├── auth.js            # JWT authentication middleware
│   └── validation.js      # Input validation middleware
└── README.md              # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the environment template and configure your variables:

```bash
cp env.example .env
```

Edit `.env` file with your configuration:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_demo
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=24h
```

### 3. MongoDB Setup

Make sure MongoDB is running on your system. If you don't have MongoDB installed:

- **Windows**: Download from [MongoDB website](https://www.mongodb.com/try/download/community)
- **macOS**: `brew install mongodb-community`
- **Linux**: `sudo apt install mongodb`

### 4. Run the Application

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000/api/auth
```

### 1. Register User
**POST** `/register`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "000000000000000000000000",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "isActive": true,
      "createdAt": "2025-07-12T10:00:00.000Z",
      "updatedAt": "2025-07-12T10:00:00.000Z"
    },
    "token": "eyJhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..."
  }
}
```

### 2. Login User
**POST** `/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "000000000000000000000000",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "isActive": true,
      "lastLogin": "2025-07-12T10:00:00.000Z",
      "createdAt": "2025-07-12T10:00:00.000Z",
      "updatedAt": "2025-07-12T10:00:00.000Z"
    },
    "token": "eyJhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..."
  }
}
```

### 3. Get User Profile (Protected)
**GET** `/profile`

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "000000000000000000000000",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "isActive": true,
      "lastLogin": "2025-07-12T10:00:00.000Z",
      "createdAt": "2025-07-12T10:00:00.000Z",
      "updatedAt": "2025-07-12T10:00:00.000Z"
    }
  }
}
```

## Validation Rules

### Registration Validation
- **Email**: Valid email format
- **Password**: Minimum 6 characters, must contain uppercase, lowercase, and number
- **FirstName**: 1-50 characters, letters and spaces only
- **LastName**: 1-50 characters, letters and spaces only

### Login Validation
- **Email**: Valid email format
- **Password**: Required field

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "type": "field",
      "value": "invalid-email",
      "msg": "Please provide a valid email address",
      "path": "email",
      "location": "body"
    }
  ]
}
```

### Authentication Error (401)
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables
- **express-validator**: Input validation
- **nodemon**: Development server (dev dependency)

## License

ISC 