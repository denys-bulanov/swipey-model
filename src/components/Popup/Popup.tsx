'use client'

import React from 'react'
import Button from '@/src/shared/Button/Button'
import Image from '@/node_modules/next/image'

type PopupProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  actionText?: string
  onAction?: () => void
}

const Popup = ({ isOpen, onClose, onAction }: PopupProps) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4'>
      <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg h-[60%] sm:h-[70%] md:h-[70%] rounded-2xl overflow-hidden text-white shadow-lg transform transition-all duration-500 scale-100'>
        <div className='absolute inset-0'>
          <Image src='/nature.jpg' alt='popup background' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div> {/* overlay */}
        </div>

        <div className='relative flex flex-col justify-end h-full p-4 sm:p-6 md:p-10'>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white text-xl
                   bg-white/20 rounded-full hover:bg-white/30 transition'
          >
            &times;
          </button>

          <div className='text-center'>
            <p className='text-3xl sm:text-4xl md:text-5xl text-white uppercase font-bold font-anton tracking-wide mb-4'>
              Don’t leave me waiting, <span className='text-colors-primary'>babe</span>
            </p>

            <p className='text-white mb-6 text-sm sm:text-base md:text-lg'>Join now & I’ll be in your inbox tonight 💦 Don’t make me beg…</p>

            <Button text='Take Me Back To Checkout' onClick={onAction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
