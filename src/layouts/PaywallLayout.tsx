'use client'

import React, { ReactNode } from 'react'

type PaywallLayoutProps = {
  children: ReactNode
}

const PaywallLayout = ({ children }: PaywallLayoutProps) => {
  return (
    <>
      <main className='relative min-h-screen flex flex-col'>
        <div className='absolute inset-0 -z-10'>
          <div
            className='absolute inset-0 
            backdrop-blur-[40px] 
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.9))] 
            [mask-repeat:no-repeat] [mask-size:100%]'
          />
        </div>
        <div className='flex-grow relative z-10'>{children}</div>
      </main>
    </>
  )
}

export default PaywallLayout
