import express, { Application, Request, Response } from 'express'
import cors from 'cors'

// Application
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
