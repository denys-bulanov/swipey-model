import Image from '@/node_modules/next/image'
import React from 'react'

type ButtonProps = {
  onClick?: () => void
  text: string
  disabled?: boolean
  background?: 'default' | 'pink' | 'opacity' | 'gray'
  icon?: boolean
}

const Button = ({ onClick, text, disabled, background = 'default', icon = false }: ButtonProps) => {
  const bgClass = disabled
    ? 'bg-[#110C154D] text-white/60 cursor-not-allowed shadow-none'
    : background === 'pink'
      ? 'bg-g_pinkToPeach hover:bg-g_purpleToPurple shadow-pink'
      : background === 'opacity'
        ? 'bg-colors-secondaryPremium/10 border border-colors-Accent3 hover:bg-g_purpleToPurple'
        : background === 'gray'
          ? 'bg-white/20 shadow-none'
          : 'bg-g_lightPurpleToPurple hover:bg-g_purpleToPurple shadow-pink'

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`text-white cursor-pointer w-full px-10 py-3 rounded-2xl text-sm font-poppins transition-colors duration-300 ease-in-out ${bgClass} flex justify-center`}
    >
      <span className='inline-flex items-center gap-4'>
        {text}
        {icon && <Image src='/Arrow.svg' alt='icon' width={8} height={8} />}
      </span>
    </button>
  )
}

export default Button
