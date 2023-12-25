import SpinLoader from 'components/loader/spin-loader'
import React from 'react'

const Button = ({ children, type, className, onButtonClick, loading, disabled, style }) => {
  return (
    <button
      className={`${type === 'primary' ? 'bg-[#5a99e8] text-[#FFF] rounded-[4px]' : type === 'secondary' ? 'bg-[#393f5c] text-[#FFF] rounded-[4px]' : ''} ${className}`}
      onClick={onButtonClick}
      disabled={disabled}
      style={style}
    >
      {loading ? <SpinLoader /> : children}
    </button>
  )
}

export default Button
