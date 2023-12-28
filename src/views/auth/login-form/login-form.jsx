import dynamic from 'next/dynamic'
import Button from 'components/button/button'
import PasswordInput from 'components/input/password-input'
import TextInput from 'components/input/text-input'
import UseLoginForm from 'views/hooks/use-login-form'

const LoginForm = () => {
  const EnterOtp = dynamic(() => import('views/auth/enter-otp/enter-otp'), { ssr: false })

  const { showOtpScreen, handleEmailChange, handlePasswordChange, handleLoginClick, errorState } = UseLoginForm()
  return (
    <>
      {showOtpScreen ? (
        <EnterOtp />
      ) : (
        <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
          <p className='text-center font-bold text-success-500 text-lg'>Social media for cricket fans </p>
          <div className='space-y-6 '>
            <div className='space-y-1'>
              <TextInput containerClassName='space-y-1.5 ' label='Email Address' placeHolder='Enter your email address' onChange={handleEmailChange} />
              {errorState?.email && <p className='text-red-500 text-xs'>{errorState?.email}</p>}
            </div>
            <div className='space-y-1'>
              <PasswordInput containerClassName='space-y-1.5' label='Password' onChange={handlePasswordChange} />
              {errorState?.password && <p className='text-red-500 text-xs'>{errorState?.password}</p>}
              <Button as='link' href='/auth/forgot-password' className='inline-block cursor-pointer float-right font-semibold text-sm text-gray-300 hover:text-gray-100'>
                Forgot Password ?
              </Button>
            </div>
          </div>
          <div className='mt-6 space-y-4 w-full'>
            <Button as='button' type='primary' className='w-full font-semibold tracking-widest  py-2.5 px-[18px]' onButtonClick={handleLoginClick}>
              LOGIN
            </Button>
          </div>
          <div className='mt-5 text-center'>
            <p className='text-[15px] text-gray-200 text-center inline block'> Not an user yet? </p>
            <Button as='link' href='/auth/signup' className='  ml-1.5 font-semibold text-[#5a99e8]'>
              Sign Up!
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginForm
