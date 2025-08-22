import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { listCtrl, createCtrl, markReadCtrl } from '../controllers/notification.controller.js'

const r = Router()
r.use(auth)
r.get('/', listCtrl)
r.post('/', createCtrl)
r.patch('/:id/read', markReadCtrl)
export default r
