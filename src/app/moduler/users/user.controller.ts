import { Request, Response } from 'express'
import { createUserDb } from './user.server'

const createUserC = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserDb(user)
    res.status(200).json({
      status: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to creat user',
    })
  }
}

export { createUserC }
