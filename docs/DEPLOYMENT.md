# Deployment Guide

Backend (Render/Railway):
- Set env from backend/.env.example (MONGO_URI, JWT_SECRET, STRIPE_*, OPENAI_API_KEY, APP_URL)
- Enable "Allow raw body" for `/api/stripe/webhook` or keep raw route before JSON parser (already done)

Frontend (Vercel):
- Set `VITE_API_BASE_URL` to your API like `https://api.yourdomain.com/api`

MongoDB Atlas:
- Create cluster, copy connection string to backend env

Stripe:
- Create a recurring **Price** for Pro → set `STRIPE_PRICE_PRO`
- Set webhook URL → `https://<api-domain>/api/stripe/webhook`
