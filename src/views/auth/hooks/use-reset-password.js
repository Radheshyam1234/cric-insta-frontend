import { handleApiPost } from 'api/Axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const UseResetPassword = ({ userInfo }) => {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    passwordLength: '',
    passwordMatch: '',
  })

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value?.trim())
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleErrorState = (type, text) => {
    setErrorState((prev) => ({ ...prev, [type]: text }))
  }

  const validatePasswordEntry = () => {
    let isValid = true
    setErrorState({
      passwordLength: '',
      passwordMatch: '',
    })
    if (newPassword.length < 4) {
      isValid = false
      handleErrorState('passwordLength', 'Password length must be at least 4')
    } else if (newPassword !== confirmPassword) {
      isValid = false
      handleErrorState('passwordMatch', "Password doesn't match")
    }
    return isValid
  }

  const handleResetPasswordClick = async () => {
    if (validatePasswordEntry()) {
      try {
        setLoading(true)
        const res = await handleApiPost('/auth/reset-password', { email: userInfo?.email, password: newPassword })
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    handleNewPasswordChange,
    handleConfirmPasswordChange,
    handleResetPasswordClick,
    errorState,
    loading,
  }
}

export default UseResetPassword
