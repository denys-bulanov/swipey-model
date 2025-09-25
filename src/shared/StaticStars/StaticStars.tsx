import React from 'react'
import Star from '../Star/Star'

type StaticStarsProp = {
  position: 'top-left' | 'bottom-right'
}

const StaticStars = ({ position }: StaticStarsProp) => {
  if (position === 'top-left') {
    return (
      <div className='absolute w-[46px] h-[47px] top-5 '>
        <Star size='w-6 h-6' className='absolute top-0 left-1/2 -translate-x-1/2' />
        <Star size='w-3 h-3' className='absolute top-1/3 right-1' />
        <Star size='w-4 h-4' className='absolute top-2/3 left-1' />
      </div>
    )
  }

  if (position === 'bottom-right') {
    return (
      <div className='absolute w-[46px] h-[47px] bottom-1 right-0'>
        <Star size='w-6 h-6' className='absolute bottom-0 left-1/2 -translate-x-1/2' />
        <Star size='w-4 h-4' className='absolute top-1/4 left-0' />
        <Star size='w-3 h-3' className='absolute top-0 right-2' />
      </div>
    )
  }

  return null
}

export default StaticStars
