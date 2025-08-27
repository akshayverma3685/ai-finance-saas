🎨 AI Finance SaaS - Frontend

This is the **frontend user panel** for **AI Finance SaaS**, built with **Next.js 14**, **TailwindCSS**, and **ShadCN/UI**.  
It provides a modern, responsive, and secure UI for authentication, payments, analytics, and AI features.

---

## ⚡ Features

- 🖥️ Modern responsive UI with **TailwindCSS**
- 🎨 Prebuilt components via **ShadCN/UI**
- 🔑 Authentication & session management
- 📊 User dashboard with charts
- 💳 Payment integration (Razorpay)
- 🤖 AI-powered queries (OpenAI API)
- 🌙 Dark / Light mode support
- ✅ ESLint + Prettier for clean code

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router + Pages Router)
- **React 18**
- **TailwindCSS 3**
- **ShadCN/UI**
- **Lucide Icons**
- **Recharts** (for analytics & graphs)
- **Axios / Fetch API**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ai-finance-saas-frontend.git
cd ai-finance-saas-frontend

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env.local file in the root:

NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
NEXT_PUBLIC_OPENAI_KEY=your_openai_key

4️⃣ Run Development Server

npm run dev

Now visit: http://localhost:3000


---

🧪 Lint & Format

npm run lint
npm run format


---

📦 Deployment

Deploy on Vercel (Recommended)

vercel

Deploy with Docker

docker build -t ai-finance-frontend .
docker run -p 3000:3000 ai-finance-frontend


---

📡 Backend Integration

Make sure your backend is running at:

http://localhost:8080

or update NEXT_PUBLIC_API_URL in .env.local for production.


---

📊 Example Pages

/ → Landing page

/login → User login

/register → User signup

/dashboard → Main dashboard (requires login)

/settings → User profile & settings



---

👨‍💻 Author

Developed by Akshay Verma 🚀
📧 Contact: akshayverma3685@gmail.com
🌐 GitHub: akshayverma3685
