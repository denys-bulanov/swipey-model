import Image from '@/node_modules/next/image'
import React from 'react'

type BottomTextProps = {
  text: string
  icon?: boolean
  onClick: () => void
}

const BottomText = ({ text, icon = false, onClick }: BottomTextProps) => {
  return (
    <div onClick={onClick} className='cursor-pointer mt-10 mb-5 sm:mt-20 flex items-center justify-center gap-2 font-semibold flex-col'>
      <p className='uppercase text-gray-500 text-sm'>{text}</p>
      {icon && <Image src='/ArrowGray.svg' alt='icon' width={8} height={8} />}
    </div>
  )
}

export default BottomText
