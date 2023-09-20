'use client'

import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'react-hot-toast'

const SignUpForm = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onSignUp = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/signup', user).then(() => {
        toast.success('User created')
      })

      router.push('/sign-in')
    } catch (error: any) {
      console.log('Signup failed', error.message)

      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="flex flex-1 flex-col justify-center  rounded-lg bg-gray-400 p-4">
      <h1 className="pb-2 text-3xl font-bold">
        {loading ? 'Processing' : 'Sign Up'}
      </h1>
      <hr />
      <Label className="pb-2 pt-3 text-lg" htmlFor="username">
        Username
      </Label>
      <Input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <Label className="pb-2 pt-3 text-lg" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <Label className="pb-2 pt-3 text-lg" htmlFor="password">
        Password
      </Label>
      <Input
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <Button className="mt-8" onClick={onSignUp}>
        {buttonDisabled ? 'Please complete all fields' : 'Sign Up'}
      </Button>
      <Link href="/sign-in">
        <span className="flex items-center pt-2">
          Alreay have an account?
          <h3 className=" items-center pl-2 text-sm text-slate-50">Sign In</h3>
        </span>
      </Link>
    </div>
  )
}

export default SignUpForm
