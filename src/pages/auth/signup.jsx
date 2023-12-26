import dynamic from 'next/dynamic'
import EnterOtp from 'views/auth/enter-otp/enter-otp'

const SignUp = () => {
  const SignUpForm = dynamic(() => import('views/auth/signup-form/signup-form'))
  const EnterOtp = dynamic(() => import('views/auth/enter-otp/enter-otp'), { ssr: false })

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary-1000'>
      <SignUpForm />
      <EnterOtp />
    </div>
  )
}

export default SignUp
