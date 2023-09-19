import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { HandMetal } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserAccountButton from './UserAccountButton'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <header className="sticky top-0 z-[70] bg-slate-200 py-6 dark:bg-slate-700">
      <nav className="container mx-auto flex items-center justify-between sm:px-48">
        <ul className="flex gap-6">
          <li>
            <Link className="flex gap-2" href="/">
              <HandMetal />
              <h3 className="font-semibold text-blue-900">Home</h3>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4 ">
          {session?.user ? (
            <UserAccountButton />
          ) : (
            <ul className="flex gap-4">
              <li>
                <Link className={buttonVariants()} href="/sign-in">
                  Sign in
                </Link>
              </li>
              <li>
                <Link className={buttonVariants()} href="/sign-up">
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
