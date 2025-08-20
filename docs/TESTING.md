# ✅ AI Finance SaaS – Testing Guide

This file helps you confirm that the project is working correctly after cloning or deployment.

---

## 🔹 Step 1: Clone & Setup

```bash
git clone https://github.com/akshayverma3685/ai-finance-saas.git
cd ai-finance-saas


---

🔹 Step 2: Backend Setup

cd backend
cp .env.example .env
npm install
npm run dev

👉 Check:

Console should show: Server running on port 5000

Test API routes:

http://localhost:5000/api/auth/signup

http://localhost:5000/api/auth/login

http://localhost:5000/api/expenses (JWT token required)




---

🔹 Step 3: Frontend Setup

cd frontend
cp .env.example .env
npm install
npm run dev

👉 Open browser: http://localhost:5173
👉 Test flow:

1. Signup → Login


2. Add expense → Dashboard updates


3. Upgrade button → Stripe checkout opens




---

🔹 Step 4: Database Check

Ensure MongoDB Atlas URI in .env is valid

Verify new users appear in the users collection

Expenses should be stored in the expenses collection



---

🔹 Step 5: Stripe Test Mode

Use test secret key from Stripe (sk_test_xxx) in .env

Upgrade to Pro → Checkout opens

Use test card: 4242 4242 4242 4242 with any future expiry + random CVC



---

🔹 Step 6: AI Insights (Pro Feature)

Add your OPENAI_API_KEY in .env

Login as Pro user → Go to AI Insights page

Confirm AI generates suggestions for expenses



---

🔹 Step 7: Docker Run (Optional)

docker-compose up --build

👉 Backend, frontend, and MongoDB should all run together.


---

✅ Final Check

If all the above steps succeed:

Authentication works

Expenses are saved

Dashboard updates

Stripe checkout works

AI insights load correctly


🎉 Your SaaS app is verified and working!
