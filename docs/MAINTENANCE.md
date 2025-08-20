# 🛠️ Maintenance Guide

This file helps you know **when & what to update** in your SaaS app.

## ✅ Weekly
- Monitor server logs
- Check for failed Stripe payments
- Review error reports (Sentry/console)

## ✅ Monthly
- Run `npm update`
- Rotate API keys (OpenAI, Stripe, MongoDB)
- Optimize database indexes

## ✅ Quarterly
- Upgrade Node.js, React, Tailwind
- Security audit (`npm audit fix`)
- Test scaling with Docker/Load test

## ✅ Yearly
- Update Terms of Service + Privacy Policy
- Backup database & verify restores
- UI refresh to match modern design
