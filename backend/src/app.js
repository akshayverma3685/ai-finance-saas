import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import './config/index.js'

import { errorHandler, notFound } from './middlewares/error.middleware.js'

// Routes
import authRoutes from './routes/auth.routes.js'
import expenseRoutes from './routes/expense.routes.js'
import reportRoutes from './routes/report.routes.js'
import uploadRoutes from './routes/upload.routes.js'
import analyticsRoutes from './routes/analytics.routes.js'
import aiRoutes from './routes/ai.routes.js'
import notificationRoutes from './routes/notification.routes.js'

// Payments (normal + webhook)
import paymentRoutes, { paymentWebhookRouter } from './routes/payment.routes.js'

const app = express()

// Security & Middlewares
app.use(helmet())
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

// Healthcheck
app.get('/health', (req, res) => res.json({ ok: true }))

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/expenses', expenseRoutes)
app.use('/api/reports', reportRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/payments', paymentRoutes)        // normal user flows
app.use('/api/payments', paymentWebhookRouter) // webhook (signature verification)
app.use('/api/ai', aiRoutes)
app.use('/api/notifications', notificationRoutes)

// Error handlers
app.use(notFound)
app.use(errorHandler)

export default app
