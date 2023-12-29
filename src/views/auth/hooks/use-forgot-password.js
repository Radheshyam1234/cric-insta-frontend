import { handleApiPost } from 'api/Axios'
import React, { useState } from 'react'

const UseForgotPassword = () => {
  const [showOtpScreen, setShowotpScreen] = useState(false)
  const [showResetPasswordScreen, setShowResetPasswordScreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [errorState, setErrorState] = useState({
    email: '',
  })

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value)
  }

  const handleShowResetPasswordScreen = () => {
    setShowotpScreen(!showOtpScreen)
    setShowResetPasswordScreen(!showResetPasswordScreen)
  }

  const verifyInput = () => {
    let isValid = true
    setErrorState({
      email: '',
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setErrorState((prev) => ({ ...prev, email: 'Please enter valid email' }))
      isValid = false
    }
    return isValid
  }

  const handleSendOtpClick = async () => {
    if (verifyInput()) {
      setLoading(true)
      try {
        const res = await handleApiPost('/auth/sendotp', { email }, { requestType: 'reset password' })
        setShowotpScreen(true)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    handleEmailChange,
    email,
    errorState,
    showOtpScreen,
    handleSendOtpClick,
    loading,
    showResetPasswordScreen,
    handleShowResetPasswordScreen,
  }
}

export default UseForgotPassword
