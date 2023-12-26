import Button from 'components/button/button'
import useCountdownTimer from 'hooks/use-countdown-timer'
import { useEffect, useState } from 'react'
import ReactOtpInput from 'react-otp-input'

const EnterOtp = () => {
  const [otp, setOtp] = useState()
  const [disableResend, setDisableResend] = useState(true)

  const { remainingTime } = useCountdownTimer({
    initialTime: 30,
    onTimerEnd: () => {
      setDisableResend(false)
    },
  })

  return (
    <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
      <p className='text-white text-lg font-bold text-center'>Enter OTP</p>

      <ReactOtpInput
        value={otp}
        numInputs={6}
        onChange={(e) => {
          setOtp(e)
        }}
        inputType={'number'}
        focusStyle='z-10 !outline-none !border-none'
        shouldAutoFocus={true}
        separator={<span></span>}
        className=''
        containerStyle='w-full justify-around'
        inputStyle={`!h-11 !w-12 !border-none !outline-none !text-primary-900  font-semibold !text-xl !rounded-sm`}
        renderInput={(props) => <input {...props} />}
      />
      <Button as='button' type='primary' className='w-full font-semibold tracking-widest  py-2.5 px-[18px] ' disabled={false}>
        Verify OTP
      </Button>
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-400'>OTP sent on your email</p>
        <p className={`inline-block text-center text-sm font-semibold text-success-400 `}>
          <span className={`${disableResend ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}>Resend OTP </span>{' '}
          <span className='text-white text-xs ml-2'> {remainingTime > 0 ? `00:${remainingTime}` : ''}</span>
        </p>
      </div>
    </div>
  )
}

export default EnterOtp
