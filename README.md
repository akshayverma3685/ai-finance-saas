AI Finance SaaS (Fullstack)

An **Enterprise-grade Finance SaaS** platform powered by:
- ⚡ **Backend:** Node.js (Express + MongoDB + JWT Auth)
- 🎨 **Frontend:** Next.js + Tailwind + ShadCN/UI
- 💳 **Payments:** Razorpay Integration
- 🤖 **AI Features:** OpenAI APIs
- 📊 **Analytics:** Charts & Reports
- 🔔 **Notifications + OCR + Chatbot**

---


## 🛠️ Tech Stack

### Backend
- **Express.js** (API framework)
- **MongoDB (Mongoose)** (Database)
- **JWT + Bcrypt** (Authentication & Security)
- **Multer** (File uploads)
- **Helmet + CORS** (Security)
- **Razorpay SDK** (Payments)
- **OpenAI SDK** (AI features)
- **Pino + Morgan** (Logging)

### Frontend
- **Next.js 14 (Pages Router)**
- **React 18**
- **TailwindCSS 3**
- **ShadCN/UI** (UI components)
- **Lucide Icons**
- **Recharts** (Charts & Analytics)

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/ai-finance-saas.git
cd ai-finance-saas

2️⃣ Backend Setup

cd backend
npm install

Create .env file in backend/:

PORT=8080
MONGO_URI=mongodb://localhost:27017/finance_saas
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
OPENAI_API_KEY=your_openai_key

Run backend:

npm run dev

Backend runs on 👉 http://localhost:8080


---

3️⃣ Frontend Setup

cd frontend
npm install

Create .env.local in frontend/:

NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_RAZORPAY_KEY=your_key
NEXT_PUBLIC_OPENAI_KEY=your_openai_key

Run frontend:

npm run dev

Frontend runs on 👉 http://localhost:3000


---

🐳 Docker Setup (Optional)

Run Backend & Frontend together

docker-compose up --build


---

📦 Deployment

Backend

Deploy on Render, Railway, or AWS EC2

Or use Docker + VPS


Frontend

Deploy easily on Vercel (Recommended)

Or use Netlify



---

📊 Features Overview

✅ User Authentication (JWT + Cookies)

✅ Role-based Access (Admin/User)

✅ Expense Tracking & Reports

✅ AI-powered Finance Insights

✅ Payment Integration (Razorpay)

✅ File Upload + OCR

✅ Notifications & Chatbot

✅ Analytics Dashboard (Recharts)



---

📡 API Routes (Backend)

POST /api/auth/register → Register

POST /api/auth/login → Login

GET /api/expenses → Get expenses

POST /api/payments → Create payment

POST /api/ai/query → AI finance query

POST /api/ocr → OCR extract text



---

👨‍💻 Author

Developed by Akshay Verma🚀
📧 Email: akshayverma3685@gmail.com
🌐 GitHub: akshayverma3685
