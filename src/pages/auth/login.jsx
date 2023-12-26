import dynamic from 'next/dynamic'

const Login = () => {
  const LoginForm = dynamic(() => import('views/auth/login-form/login-form'))
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary-1000'>
      <LoginForm />
    </div>
  )
}
export default Login
