import { handleApiGet, handleApiPost } from 'api/Axios'
import React, { useState } from 'react'

const UseForgotPassword = () => {
  const [showOtpScreen, setShowotpScreen] = useState(false)
  const [email, setEmail] = useState('')
  const [errorState, setErrorState] = useState({
    email: '',
  })

  handleApiPost('/auth/sendotp', { email: 'rdk7352669258@gmail.com' }).then((data) => {
    console.log(data)
  })

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value)
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

  const handleSendOtpClick = () => {
    if (verifyInput()) setShowotpScreen(true)
  }

  return {
    handleEmailChange,
    errorState,
    showOtpScreen,
    handleSendOtpClick,
  }
}

export default UseForgotPassword
