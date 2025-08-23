# 🚀 AI Finance SaaS - Backend

This is the **backend service** for **AI Finance SaaS**, built with **Node.js (Express)** and **MongoDB (Mongoose)**.  
It provides authentication, user management, integrations, payments, and API endpoints for the frontend app.

---

## 📂 Project Structure

backend/ │── src/ │   ├── app.js            # Express app setup │   ├── server.js         # Entry point │   ├── config/           # Environment & DB configs │   ├── controllers/      # Business logic │   ├── middlewares/      # Logger, Rate limiter, Validation │   ├── models/           # Mongoose models │   ├── routes/           # API routes │   ├── services/         # External services (Razorpay, OpenAI, etc.) │   └── utils/            # Helper functions │ ├── .env                  # Environment variables ├── Dockerfile            # Containerization ├── package.json └── README.md

---

## ⚡ Features

- 🔑 JWT-based Authentication (Login/Signup)
- 👤 Role-based Authorization (Admin / User)
- 🛡️ Security (Helmet, CORS, Rate-limiting, Validation)
- 💳 Payment integration (Razorpay)
- 🤖 AI integration (OpenAI API)
- 📊 Logging with Pino + Morgan
- 🐳 Docker support
- ✅ Jest testing

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Razorpay API**
- **OpenAI API**
- **Docker + Nodemon**
- **ESLint + Prettier**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ai-finance-saas-backend.git
cd ai-finance-saas-backend

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file in the root:

PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/finance
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
OPENAI_API_KEY=your_openai_key

4️⃣ Run in Development

npm run dev

Server runs on: http://localhost:8080


---

🧪 Testing

Run unit tests with:

npm test


---

🐳 Docker Support

Build and run using Docker:

docker build -t ai-finance-backend .
docker run -p 8080:8080 ai-finance-backend


---

📡 API Endpoints (Examples)

Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login user

GET /api/auth/me → Get logged-in user


Payments

POST /api/payments/create-order → Create Razorpay order


AI

POST /api/ai/query → Ask OpenAI API



---

🔒 Security & Best Practices

Helmet for HTTP headers

Rate limiting (express-rate-limit)

Input validation (express-validator)

Hashed passwords (bcryptjs)

Role-based access control



---

📦 Deployment

Vercel (Not Recommended for Backend)

For backend APIs, prefer Render, Railway, Heroku, or Docker on VPS.

Deploy with Docker

docker build -t ai-finance-backend .
docker run -d -p 8080:8080 ai-finance-backend


---

👨‍💻 Author

Developed by Akshay Verma🚀
📧 Contact: akshayverma3685@gmail.com
🌐 GitHub: akshayverma3685
