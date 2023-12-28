import dynamic from 'next/dynamic'

const SignUp = () => {
  const SignUpForm = dynamic(() => import('views/auth/signup-form/signup-form'))

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary-1000'>
      <SignUpForm />
    </div>
  )
}

export default SignUp
