import React from 'react'
import loadable from '@loadable/component'

const LoginForm = loadable(() => import('views/login-form/login-form'))

const Login = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary-1000'>
      <LoginForm />
    </div>
  )
}
export default Login
