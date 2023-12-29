import TextInput from 'components/input/text-input'
import Button from 'components/button/button'
import UseForgotPassword from 'views/auth/hooks/use-forgot-password'
import EnterOtp from '../enter-otp/enter-otp'
import ResetPassword from './reset-password'

const ForgotPasswordForm = () => {
  const { email, handleEmailChange, errorState, showOtpScreen, handleSendOtpClick, loading, showResetPasswordScreen, handleShowResetPasswordScreen } = UseForgotPassword()
  return (
    <>
      {showOtpScreen ? (
        <EnterOtp requestType={'reset password'} userInfo={{ email }} callbackFun={handleShowResetPasswordScreen} />
      ) : showResetPasswordScreen ? (
        <ResetPassword userInfo={{ email }} />
      ) : (
        <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
          <p className='text-center font-bold text-gray-100 text-lg'>No problem. Enter your email address below and we will send you an OTP.</p>
          <div className='mt-5 space-y-5'>
            <div className='space-y-1'>
              <TextInput containerClassName='space-y-1.5 ' label='Email Address' placeHolder='Enter your email address' onChange={handleEmailChange} />
              {errorState?.email && <p className='text-red-500 text-xs'>{errorState?.email}</p>}
            </div>
            <div className='w-full'>
              <Button
                as='button'
                type='primary'
                className='w-full font-semibold tracking-widest py-2.5 px-[18px]'
                loading={loading}
                disabled={loading}
                onButtonClick={handleSendOtpClick}
              >
                Send OTP
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ForgotPasswordForm
