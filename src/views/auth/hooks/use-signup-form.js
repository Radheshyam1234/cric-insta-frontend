import { handleApiPost } from 'api/Axios'
import React, { useState } from 'react'

const UseSignUpForm = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    userName: '',
    password: '',
  })
  const [showOtpScreen, setShowotpScreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    email: '',
    userName: '',
    password: '',
  })

  const handleSignUpInfo = (type, val) => {
    setSignUpInfo((prev) => ({ ...prev, [type]: val }))
  }

  const handleErrorState = (type, message) => {
    setErrorState((prev) => ({ ...prev, [type]: message }))
  }

  const verifySignUpCredential = () => {
    let isValid = true
    setErrorState({
      email: '',
      password: '',
      userName: '',
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (signUpInfo?.password?.length < 4) {
      handleErrorState('password', 'Password length must be at least 4')
      isValid = false
    }
    if (signUpInfo?.userName.length < 4) {
      handleErrorState('userName', 'Username length must be at least 4')
      isValid = false
    }
    if (!emailPattern.test(signUpInfo?.email)) {
      handleErrorState('email', 'Please enter valid email')
      isValid = false
    }
    return isValid
  }

  const handleCreateAccountClick = async () => {
    if (verifySignUpCredential()) {
      setLoading(true)
      try {
        const res = await handleApiPost('/auth/sendotp', { email: signUpInfo.email })
        setShowotpScreen(true)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    handleSignUpInfo,
    signUpInfo,
    handleCreateAccountClick,
    showOtpScreen,
    loading,
    errorState,
  }
}

export default UseSignUpForm
