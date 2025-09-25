import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 mt-4 z-50'>
      <Image src='/logo.svg' alt='Logo' width={128} height={128} priority />
    </div>
  )
}

export default Logo
