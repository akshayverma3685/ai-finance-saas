# 🚀 Deployment Guide – AI Finance SaaS

This guide explains how to deploy the full-stack **AI Finance SaaS** project (Backend + Frontend + Database + Payments).

---

## 1️⃣ Backend (Node.js + Express)

### Option A: Render
1. Push your backend folder to GitHub.
2. Go to [Render](https://render.com/) → **New Web Service**.
3. Connect GitHub repo → Select `backend/`.
4. Environment:  
   - Build Command: `npm install`  
   - Start Command: `npm run start`
5. Add Environment Variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   OPENAI_API_KEY=your_openai_key

6. Deploy → Get backend API URL (e.g. https://finance-backend.onrender.com).




---

2️⃣ Frontend (React + Vite)

Vercel

1. Push frontend/ folder to GitHub.


2. Go to Vercel → New Project.


3. Select frontend/.


4. Add Environment Variables:

VITE_API_URL=https://finance-backend.onrender.com
STRIPE_PUBLIC_KEY=your_stripe_public_key


5. Deploy → Get frontend URL (e.g. https://finance-frontend.vercel.app).




---

3️⃣ Database (MongoDB Atlas)

1. Go to MongoDB Atlas.


2. Create a free cluster.


3. Create a new database called financeDB.


4. Get connection string:

mongodb+srv://<username>:<password>@cluster.mongodb.net/financeDB


5. Add it in backend .env as MONGO_URI.




---

4️⃣ Payments (Stripe)

1. Create account → Stripe Dashboard.


2. Get API keys:

STRIPE_SECRET_KEY

STRIPE_PUBLIC_KEY

WEBHOOK_SECRET (from endpoint after deployment).



3. Add them in backend .env.


4. Enable subscription mode in Stripe.




---

5️⃣ AI (OpenAI)

1. Create account → OpenAI.


2. Get API key.


3. Add in backend .env:

OPENAI_API_KEY=sk-xxxx




---

6️⃣ Docker (Optional)

Run full project locally with one command:

docker-compose up --build


---

✅ Final Setup

Backend: https://finance-backend.onrender.com

Frontend: https://finance-frontend.vercel.app

Database: MongoDB Atlas

Payments: Stripe

AI: OpenAI



---

🎉 Your AI Finance SaaS is now deployed!
