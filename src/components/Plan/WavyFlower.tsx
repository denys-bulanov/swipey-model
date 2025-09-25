import React from 'react'

type WavyCircleProps = {
  text: string
}

export default function WavyFlower({ text }: WavyCircleProps) {
  const sizeMain = 140
  const sizeSecond = 150
  const sizeThird = 155

  const generatePath = (baseRadius: number, waveAmplitude: number, waveFrequency: number) => {
    const center = 50
    const points: [number, number][] = []
    const step = 0.5
    for (let i = 0; i <= 360; i += step) {
      const angle = (i * Math.PI) / 180
      const r = baseRadius + waveAmplitude * Math.sin(angle * waveFrequency)
      const x = center + r * Math.cos(angle)
      const y = center + r * Math.sin(angle)
      points.push([x, y])
    }
    return points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ') + ' Z'
  }

  const mainPath = generatePath(40, 2, 15)
  const secondPath = generatePath(42, 2, 15)
  const thirdPath = generatePath(45, 2, 15)

  return (
    <div className='relative w-[120px] h-[120px] flex items-center justify-center cursor-pointer group'>
      <style>{`
        @keyframes rotateCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .wavy-rot-slowest { animation: rotateCCW 40s linear infinite; transform-origin: 50% 50%; }
        .wavy-rot-slow { animation: rotateCCW 28s linear infinite; transform-origin: 50% 50%; }
        .wavy-rot-med { animation: rotateCCW 18s linear infinite; transform-origin: 50% 50%; }
      `}</style>

      <div className='absolute inset-0 bg-g_neonPinkToPink' style={{ filter: 'blur(23px)', opacity: 0.6, zIndex: 0 }} />

      <svg width={sizeThird} height={sizeThird} viewBox='0 0 100 100' className='absolute wavy-rot-slowest z-10'>
        <defs>
          <linearGradient id='grad3' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#f549a5' />
            <stop offset='100%' stopColor='#ab3876' />
          </linearGradient>
        </defs>
        <path d={thirdPath} fill='url(#grad3)' fillOpacity='0.4' stroke='#fff' strokeOpacity='0.22' strokeWidth='1' />
      </svg>

      <svg width={sizeSecond} height={sizeSecond} viewBox='0 0 100 100' className='absolute wavy-rot-slow z-20'>
        <defs>
          <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#f549a5' />
            <stop offset='100%' stopColor='#ab3876' />
          </linearGradient>
        </defs>
        <path d={secondPath} fill='url(#grad2)' fillOpacity='0.7' stroke='#fff' strokeOpacity='0.22' strokeWidth='1' />
      </svg>

      <svg width={sizeMain} height={sizeMain} viewBox='0 0 100 100' className='absolute wavy-rot-med z-30'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#f549a5' />
            <stop offset='100%' stopColor='#ab3876' />
          </linearGradient>
          <linearGradient id='grad1Hover' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#F76FAF' /> <stop offset='100%' stopColor='#FF6182' />{' '}
          </linearGradient>
        </defs>
        <path
          className='transition-colors duration-500 group-hover:fill-[url(#grad1Hover)]'
          d={mainPath}
          fill='url(#grad1)'
          stroke='#fff'
          strokeOpacity='0.22'
          strokeWidth='1'
        />
      </svg>

      <div className='absolute z-40 flex flex-col items-center justify-center text-white text-center' style={{ width: sizeMain, height: sizeMain }}>
        <p className='max-w-[70%]'>{text}</p>
        <p className='text-[12px]'>01:09:53</p>
      </div>
    </div>
  )
}
