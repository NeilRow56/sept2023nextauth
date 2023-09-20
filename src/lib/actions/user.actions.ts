'use server'

import { connectToDB } from '../mongoose'

import User from '../models/user.model'

interface Params {
  username: string
  email: string
  password: string
}

export async function createUser({ username, email, password }: Params) {
  try {
    connectToDB()

    const newUser = await User.create({
      username,
      email,
      password,
    })

    const createdUser = await newUser.save()

    return createdUser
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`)
  }
}
