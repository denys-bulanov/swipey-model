import Image from '@/node_modules/next/image'
import React from 'react'

type WavyCircleProps = {
  text: string
}

export default function WavyCircle({ text }: WavyCircleProps) {
  const baseRadius = 30
  const waveAmplitude = 2
  const waveFrequency = 10
  const center = 50
  const points = []

  const step = 0.5
  for (let i = 0; i <= 360; i += step) {
    const angle = (i * Math.PI) / 180
    const r = baseRadius + waveAmplitude * Math.sin(angle * waveFrequency)
    const x = center + r * Math.cos(angle)
    const y = center + r * Math.sin(angle)
    points.push([x, y])
  }

  const pathData = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ') + ' Z'

  return (
    <div className='relative flex items-center justify-center  '>
      <svg className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] ' viewBox='0 0 100 100'>
        <defs>
          <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#f97316' />
            <stop offset='100%' stopColor='#dc2626' />
          </linearGradient>
        </defs>
        <path d={pathData} fill='url(#grad)' stroke='url(#grad)' strokeWidth='1' />

        <path d={pathData} fill='none' stroke='#d48057' strokeWidth='1' />
      </svg>
      <div
        className='absolute flex flex-col items-center justify-center text-white  text-center
        w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rotate-12'
      >
        <div className='flex items-center '>
          <p className='text-sm sm:text-base font-bold'>+{text}</p>
          <Image src='/Token.svg' alt='icon' width={16} height={16} />
        </div>
        <p className='text-[10px]  text-white/40 font-normal'>for free</p>
      </div>
    </div>
  )
}
