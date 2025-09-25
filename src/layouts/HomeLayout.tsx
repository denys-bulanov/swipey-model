'use client'
import React, { ReactNode } from 'react'
import BackgroundVideo from '../shared/BackgroundVideo/BackgroundVideo'

type HomeLayoutProps = {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main className='relative min-h-screen flex flex-col'>
      <BackgroundVideo>{children}</BackgroundVideo>
    </main>
  )
}

export default HomeLayout
