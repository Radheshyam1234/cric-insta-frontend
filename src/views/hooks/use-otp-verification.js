import { handleApiPost } from 'api/Axios'
import useCountdownTimer from 'hooks/use-countdown-timer'
import React, { useState } from 'react'

const UseOtpVerification = ({ requestType, signUpInfo }) => {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
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
  const handleVerifyOtp = async () => {
    setLoading(true)
    try {
      const res = await handleApiPost('/auth/verifyotp', { otp, signUpInfo }, { requestType })
    } catch (error) {
      console.log(error, '27')
    } finally {
      setLoading(false)
    }
  }

  return {
    otp,
    handleSetOtp,
    handleVerifyOtp,
    loading,
    disableResend,
    remainingTime,
  }
}

export default UseOtpVerification
