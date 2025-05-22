# Book Stacker - Book Review System
A RESTful API built using Node.js, Express.js, and MongoDB, allowing users to manage books and post reviews. Authenticated users can add books, post reviews, and manage their own content. This project demonstrates secure backend development, clean modular code, and well-designed API architecture.

## 🚀 Features
- User Signup & Login (JWT-based authentication)
- Add and View Books with pagination, filtering, and search
- Post one review per book per user
- Update or delete your own reviews
- Search books by title or author (partial & case-insensitive)
- Modular project structure for scalability

## 🧰 Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT (JSON Web Tokens)
- Environment Config: dotenv
- Pagination & Filtering: Built-in query options

##  Project Structure
```
  bookstacker/
│
├── controllers/       # Route controllers (logic)
├── services/          # Business logic
├── models/            # Mongoose schemas
├── routes/            # Route definitions
├── middleware/        # JWT auth, error handlers
├── config/            # DB and env config
├── .env               # Secret keys & config
├── server.js          # App entry point
└── README.md

```
## 🛠️ Setup Instructions
1. Clone the repo
   ```
   git clone https://github.com/BookStacker/booknest-api.git
   cd booknest-api
   ```
2. Install dependencies
   ```
   npm install
   ```
4. Create a .env file
   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret_key
   
   ```
5. Start Server
   ```
   node server.js
   ```
  Your API will be running at
  ```
  http://localhost:5000
  ```

