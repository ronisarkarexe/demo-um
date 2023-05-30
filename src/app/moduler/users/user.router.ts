import express from 'express'
import { createUserC } from './user.controller'

const router = express.Router()

router.post('/create-user', createUserC)

export default router
