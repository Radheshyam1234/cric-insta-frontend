import React from 'react'
import UseResetPassword from '../hooks/use-reset-password'
import TextInput from 'components/input/text-input'
import Button from 'components/button/button'

const ResetPassword = ({ userInfo }) => {
  const { handleNewPasswordChange, handleConfirmPasswordChange, handleResetPasswordClick, errorState, loading } = UseResetPassword({ userInfo })
  return (
    <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
      <p className='text-center font-bold text-gray-100 text-lg'>Reset Your Password</p>
      <div className='mt-5 space-y-5'>
        <div className='space-y-1'>
          <TextInput containerClassName='space-y-1.5 ' label='New Password' placeHolder='Enter new password' onChange={handleNewPasswordChange} />
          {errorState?.passwordLength && <p className='text-red-500 text-xs'>{errorState?.passwordLength}</p>}
        </div>
        <div className='space-y-1'>
          <TextInput containerClassName='space-y-1.5 ' label='Confirm Password' placeHolder='' onChange={handleConfirmPasswordChange} />
          {errorState?.passwordMatch && <p className='text-red-500 text-xs'>{errorState?.passwordMatch}</p>}
        </div>
        <div className='w-full'>
          <Button
            as='button'
            type='primary'
            className='w-full font-semibold tracking-widest py-2.5 px-[18px]'
            loading={loading}
            disabled={loading}
            onButtonClick={handleResetPasswordClick}
          >
            Confirm Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
