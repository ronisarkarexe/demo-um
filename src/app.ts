import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/moduler/users/user.router'

// Application
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World University!')
})

export default app
