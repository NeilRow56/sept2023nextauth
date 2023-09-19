'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SignInForm = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = React.useState(false)
  const onSignIn = async () => {}

  return (
    <div className="flex flex-1 flex-col justify-center  rounded-lg bg-gray-400 p-4">
      <h1 className="pb-2 text-3xl font-bold">Sign In</h1>
      <hr />

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
      <Button className="mt-8" onClick={onSignIn}>
        Submit
      </Button>
      <Link href="/sign-up">
        <span className="flex items-center pt-2">
          Please sign up if you do not have an account?
          <h3 className=" items-center pl-2 text-sm text-slate-50">Sign Up</h3>
        </span>
      </Link>
    </div>
  )
}

export default SignInForm
