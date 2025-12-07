# JARVIS - AI Multimodal Assistant

A full-stack web application featuring real-time emotion detection, speech recognition, and hand gesture control, with complete user authentication and profile management.

## Features

- 🎭 **Emotion Detection**: Real-time facial emotion recognition using computer vision
- 🎤 **Speech Recognition**: Voice-controlled system commands
- 👋 **Gesture Control**: Hand gesture-based mouse control
- 🔐 **User Authentication**: Secure login/signup with JWT tokens
- 👤 **Profile Management**: Update user information and change password
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile

## Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- CORS enabled

## Prerequisites

- Node.js (v20.13.1 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd JARVIS-web
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

4. Create a `.env` file in the `server` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
PORT=5000
```

## Running the Application

### Start Backend Server
```bash
cd server
npm start
```
The backend will run on `http://localhost:5000`

### Start Frontend Development Server
```bash
npm run dev
```
The frontend will run on `http://localhost:3000`

## Available API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/password` - Change password (protected)

## Features Implemented

### Authentication System
- ✅ User registration with email and password
- ✅ Secure login with JWT tokens
- ✅ Token-based authentication
- ✅ Protected routes
- ✅ Logout functionality
- ✅ Profile management
- ✅ Password change functionality

### User Interface
- ✅ User profile dropdown in navbar
- ✅ Responsive navigation menu
- ✅ Profile settings page
- ✅ Form validation and error handling
- ✅ Success/error notifications
- ✅ Smooth animations with Framer Motion

## Project Structure

```
JARVIS-web/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── auth/
│   │   │   └── AuthCard.jsx
│   │   ├── Download.jsx
│   │   ├── Emotion.jsx
│   │   ├── Gestures.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Signup.jsx
│   │   └── Speech.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── server/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   └── server.js
├── index.html
├── package.json
└── README.md
```

## Usage

1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Navigate**: Access different features from the navbar
4. **Profile Management**: Click on your name in the navbar to access:
   - Profile Settings
   - Logout
5. **Update Profile**: Change your name and email
6. **Change Password**: Update your password securely

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes with middleware
- Secure token storage in localStorage
- Current password verification for password changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Developed as part of Semester 08 project

---

**JARVIS** - Just A Rather Very Intelligent System 🤖
