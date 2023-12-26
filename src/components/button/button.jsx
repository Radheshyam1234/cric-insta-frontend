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
        className={`${
          type === 'primary'
            ? 'bg-[#5a99e8] hover:bg-[#5189D0] transition-all delay-100 text-[#FFF] rounded-[4px]'
            : type === 'secondary'
            ? 'bg-[#393f5c] hover:bg-[#4C526C] transition-all delay-100 text-[#FFF] rounded-[4px]'
            : ''
        } ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
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
