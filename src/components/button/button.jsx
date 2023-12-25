import SpinLoader from 'components/loader/spin-loader'
import { Link } from 'react-router-dom'
import React from 'react'

const Button = ({ children, as, to, type, className, onButtonClick, onLinkClick, loading, disabled, style }) => {
  if (as === 'link' && to)
    return (
      <Link to={to} className={className} onClick={onLinkClick}>
        {children}
      </Link>
    )
  if (as === 'button')
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
  return <></>
}

export default Button
