'use client'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import React, { ReactNode, useEffect } from 'react'

type BackgroundVideoProps = {
  children?: ReactNode
  videoUrl?: string
  isBackgroundSmall?: boolean
}

const BackgroundVideo = ({
  children,
  videoUrl = 'https://d12kahz818c96x.cloudfront.net/paywall/paywall-model-sfw.mp4',
  isBackgroundSmall = true,
}: BackgroundVideoProps) => {
  const { previewVideo } = useAppSelector((state: RootState) => state.character)

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }
    setVh()
    window.addEventListener('resize', setVh)
    return () => window.removeEventListener('resize', setVh)
  }, [])

  return (
    <div className='relative w-full overflow-hidden' style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <video
        src={previewVideo || ''}
        className='absolute inset-0 w-full h-full object-cover filter blur-xl scale-105 -z-10'
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='absolute inset-0 bg-black/40 z-0 pointer-events-none' />
      {isBackgroundSmall && (
        <div className='flex items-center justify-center w-full h-full relative z-10'>
          <div className='relative w-full max-w-[544px] h-full overflow-hidden'>
            <video
              src={previewVideo || ''}
              className='absolute inset-0 w-full h-full object-cover md:object-contain'
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='relative z-10 w-full h-full flex items-center justify-center'>{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BackgroundVideo
