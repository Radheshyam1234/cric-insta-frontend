import Button from 'components/button/button'
import PasswordInput from 'components/input/password-input'
import TextInput from 'components/input/text-input'
import UseSignUpForm from 'views/auth/hooks/use-signup-form'
import EnterOtp from '../enter-otp/enter-otp'

const SignUpForm = () => {
  const { showOtpScreen, signUpInfo, handleSignUpInfo, handleCreateAccountClick, loading, errorState } = UseSignUpForm()
  return (
    <>
      {showOtpScreen ? (
        <EnterOtp requestType={'create user'} userInfo={signUpInfo} />
      ) : (
        <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
          <p className='text-center font-bold text-success-500 text-lg'>Social media for cricket fans </p>
          <div className='space-y-6 '>
            <div className='space-y-1'>
              <TextInput
                containerClassName='space-y-1.5 '
                label='Email Address *'
                placeHolder='Enter your email address'
                onChange={(e) => {
                  handleSignUpInfo('email', e.target.value.trim())
                }}
              />
              {errorState?.email && <p className='text-red-500 text-xs'>{errorState?.email}</p>}
            </div>
            <div className='space-y-1'>
              <TextInput
                containerClassName='space-y-1.5 '
                label='Username *'
                placeHolder='Enter your user name'
                onChange={(e) => {
                  handleSignUpInfo('userName', e.target.value)
                }}
              />
              {errorState?.userName && <p className='text-red-500 text-xs'>{errorState?.userName}</p>}
            </div>
            <div className='space-y-1'>
              <PasswordInput
                containerClassName='space-y-1.5'
                label='Create Password *'
                onChange={(e) => {
                  handleSignUpInfo('password', e.target.value)
                }}
              />
              {errorState?.password && <p className='text-red-500 text-xs'>{errorState?.password}</p>}
            </div>
          </div>
          <div className='mt-6 space-y-4 w-full'>
            <Button
              as='button'
              type='primary'
              className='w-full font-semibold tracking-widest  py-2.5 px-[18px]'
              loading={loading}
              disabled={loading}
              onButtonClick={handleCreateAccountClick}
            >
              Create account
            </Button>
          </div>
          <div className='mt-5 text-center'>
            <p className='text-[15px] text-gray-200 text-center inline block'> Already an user? </p>
            <Button as='link' href='/auth/login' className='  ml-1.5 hover:underline font-semibold text-[#5a99e8]'>
              Login
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUpForm
