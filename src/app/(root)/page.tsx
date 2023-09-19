import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex h-screen flex-grow items-center justify-center bg-blue-50 ">
      <div className=" text-center">
        <Button asChild className="bg-midnight">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </main>
  )
}
