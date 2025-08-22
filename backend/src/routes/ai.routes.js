import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { chatCtrl } from '../controllers/ai.controller.js'
const r = Router()
r.use(auth)
r.post('/chat', chatCtrl)
export default r
