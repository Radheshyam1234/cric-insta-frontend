import useCountdownTimer from 'hooks/use-countdown-timer'
import React, { useState } from 'react'

const UseOtpVerification = () => {
  const [otp, setOtp] = useState('')
  const [disableResend, setDisableResend] = useState(true)

  const { remainingTime } = useCountdownTimer({
    initialTime: 30,
    onTimerEnd: () => {
      setDisableResend(false)
    },
  })

  const handleSetOtp = (e) => {
    setOtp(e)
  }
  const handleVerifyOtp = () => {
    console.log(otp)
  }

  return {
    otp,
    handleSetOtp,
    handleVerifyOtp,
    disableResend,
    remainingTime,
  }
}

export default UseOtpVerification
