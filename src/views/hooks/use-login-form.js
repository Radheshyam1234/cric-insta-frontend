import { handleApiPost } from 'api/Axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const UseLoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
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

  const handleLoginClick = async () => {
    if (verifyLoginCredential()) {
      setLoading(true)
      try {
        const res = await handleApiPost('/auth/login', { email, password })
        console.log(res, 'use-login-form')
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleLoginClick,
    errorState,
  }
}

export default UseLoginForm
