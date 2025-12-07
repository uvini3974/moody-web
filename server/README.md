# Moody Auth Server

1. Install:
   cd server
   npm install

2. Copy .env.example -> .env and set values:
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=replace_with_strong_secret
   JWT_EXPIRES_IN=7d

3. Start:
   npm run dev
