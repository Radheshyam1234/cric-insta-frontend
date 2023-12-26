import SpinLoader from 'components/loader/spin-loader'
import Link from 'next/link'
import React from 'react'

const Button = ({ children, as, href, type, className, onButtonClick, onLinkClick, loading, disabled, style }) => {
  if (as === 'link' && href)
    return (
      <Link href={href} className={className} onClick={onLinkClick}>
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
