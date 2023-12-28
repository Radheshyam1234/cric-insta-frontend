import dynamic from 'next/dynamic'

const FrogotPassword = () => {
  const ForgotPasswordForm = dynamic(() => import('views/auth/forgot-password-form/forgot-password-form'))
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary-1000'>
      <ForgotPasswordForm />
    </div>
  )
}

export default FrogotPassword
