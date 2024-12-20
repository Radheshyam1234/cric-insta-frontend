import { handleApiPost } from 'api/Axios'
import React, { useEffect, useState } from 'react'
import { fetchUserLocation } from 'utils/fetchUserLocation'

const UseSignUpForm = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    userName: '',
    password: '',
    location: null,
  })
  const [showOtpScreen, setShowotpScreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    email: '',
    userName: '',
    password: '',
  })

  //Fetching user location immediately
  useEffect(() => {
    ;(() => {
      fetchUserLocation()
        .then((location) => {
          setSignUpInfo((prev) => ({ ...prev, location: location }))
        })
        .catch((error) => {
          setSignUpInfo((prev) => ({ ...prev, location: null }))
        })
    })()
  }, [])

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
        const res = await handleApiPost('/auth/sendotp', { email: signUpInfo.email }, { requestType: 'create user' })
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
