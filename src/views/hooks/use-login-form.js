import React, { useState } from 'react'

const UseLoginForm = () => {
  const [showOtpScreen, setShowotpScreen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorState, setErrorState] = useState({
    email: '',
    password: '',
  })

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e?.target?.value)
  }
  const handleErrorState = (type, message) => {
    setErrorState((prev) => ({ ...prev, [type]: message }))
  }
  const verifyLoginCredential = () => {
    let isValid = true
    setErrorState({
      email: '',
      password: '',
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (password?.length === 0) {
      handleErrorState('password', 'Please enter password')
      isValid = false
    }
    if (!emailPattern.test(email)) {
      handleErrorState('email', 'Please enter valid email')
      isValid = false
    }
    return isValid
  }

  const handleLoginClick = () => {
    if (verifyLoginCredential()) {
      setShowotpScreen(true)
    }
  }

  return {
    showOtpScreen,
    handleEmailChange,
    handlePasswordChange,
    handleLoginClick,
    errorState,
  }
}

export default UseLoginForm
