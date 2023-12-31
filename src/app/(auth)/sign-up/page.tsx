import SignUpForm from '@/components/auth/SignUpForm'
import { RegisterForm } from '@/components/forms/RegisterForm'

const SignUpPage = () => {
  return (
    <main className="flex  w-full flex-col items-center justify-center  bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg  p-8 sm:mx-auto sm:w-full sm:max-w-[500px]">
        {/* <SignUpForm /> */}
        <RegisterForm />
      </div>
    </main>
  )
}

export default SignUpPage
