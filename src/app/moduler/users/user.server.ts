import { IUser } from './user.interface'
import User from './user.model'
import config from '../../../config/index'
import { generateUserId } from './user.utils'

const createUserDb = async (user: IUser): Promise<IUser | null> => {
  // autogenerate id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createUser
}

export { createUserDb }
