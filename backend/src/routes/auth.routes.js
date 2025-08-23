import { Router } from 'express'
import { body } from 'express-validator'
import { loginCtrl, registerCtrl, meCtrl } from '../controllers/auth.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const r = Router()
r.post('/register', body('name').isLength({ min: 2 }), body('email').isEmail(), body('password').isLength({ min: 6 }), registerCtrl)
r.post('/login', body('email').isEmail(), body('password').isLength({ min: 6 }), loginCtrl)
r.get('/me', auth, meCtrl)
export default r
