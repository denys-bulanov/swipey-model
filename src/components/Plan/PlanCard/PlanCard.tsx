'use client'

import StaticStars from '@/src/shared/StaticStars/StaticStars'
import React from 'react'
import WavyCircle from './WavyCircle'

type Duration = 'monthly' | 'threeMonth' | 'annual'

type PlanCardProps = {
  namePlan: string
  duration: Duration
  isActive?: boolean
  onClick?: () => void
  price: number
}

const PlanCard = ({ namePlan, duration, isActive, onClick, price }: PlanCardProps) => {
  function calculateFanclubPlans(monthlyPrice: number) {
    // 1 Months
    const monthlyOriginal = monthlyPrice / 0.4
    const monthlyDiscount = ((1 - monthlyPrice / monthlyOriginal) * 100).toFixed(0)
    const monthlyPerDay = (monthlyPrice / 30).toFixed(2)
    const monthlySaved = +(monthlyOriginal - monthlyPrice).toFixed(2)

    // 3 Months
    const threeMonthPrice = monthlyPrice * 3
    const threeMonthOriginal = monthlyOriginal * 3
    const threeMonthDiscount = ((1 - threeMonthPrice / threeMonthOriginal) * 100).toFixed(0)
    const threeMonthPerDay = (threeMonthPrice / 90).toFixed(2)
    const threeMonthSaved = +(threeMonthOriginal - threeMonthPrice).toFixed(2)

    // Year
    const annualPrice = Math.round((monthlyPrice * 9) / 10) * 10
    const annualOriginal = annualPrice / 0.3
    const annualDiscount = ((1 - annualPrice / annualOriginal) * 100).toFixed(0)
    const annualPerDay = (annualPrice / 365).toFixed(2)
    const annualSaved = +(annualOriginal - annualPrice).toFixed(2)

    return {
      monthly: {
        price: monthlyPrice,
        original: monthlyOriginal,
        discount: monthlyDiscount,
        perDay: monthlyPerDay,
        saved: monthlySaved,
      },
      threeMonth: {
        price: threeMonthPrice,
        original: threeMonthOriginal,
        discount: threeMonthDiscount,
        perDay: threeMonthPerDay,
        saved: threeMonthSaved,
      },
      annual: {
        price: annualPrice,
        original: annualOriginal,
        discount: annualDiscount,
        perDay: annualPerDay,
        saved: annualSaved,
      },
    }
  }

  const plans = calculateFanclubPlans(price)
  const plan = plans[duration]
  console.log('plan', plan)

  return (
    <div
      onClick={onClick}
      className={`
      cursor-pointer
      bg-white/5 
      backdrop-blur-xl 
      rounded-2xl 
      shadow-lg 
      text-sm 
      transition-colors duration-300
      relative
      ${isActive ? 'bg-g_pinkToPurpleHorizontal' : ''}
    `}
    >
      <div className='absolute sm:-top-12  -top-7 -right-6 sm:-right-12'>
        <WavyCircle text={duration === 'monthly' ? '20' : duration === 'threeMonth' ? '40' : '100'} />
      </div>
      <StaticStars position='top-left' />
      <StaticStars position='bottom-right' />

      <div className='rounded-tr-2xl w-full bg-g_orangeToRed rounded-tl-2xl p-[5px] border border-[#d48057]'>
        <div className='w-full bg-g_orangeToRed flex justify-center rounded-tr-2xl rounded-tl-2xl font-semibold'>Only Today</div>
      </div>

      <div className='py-3 px-5 border border-t-0 border-[#d48057]/20 rounded-b-2xl'>
        <div className='flex justify-between items-center pb-1'>
          <span className='text-sm font-semibold'>{namePlan}</span>
        </div>
        <div className='flex flex-row justify-between items-center pb-1'>
          <div className='flex flex-row gap-3'>
            <div>{duration === 'monthly' ? '1 month' : duration === 'threeMonth' ? '3 months' : '1 year'}</div>
            <div className={`${isActive ? 'bg-g_orangeToRed' : 'bg-g_orangeToRedOpacity'} border px-2.5 rounded-lg  border-[#d48057]/60`}>
              {plan.discount}% off
            </div>
          </div>
          <div className='text-2xl'>${plan.perDay}</div>
        </div>

        <div className='text-xs flex flex-row justify-between text-colors-tetriary pb-2'>
          <div className='flex flex-row gap-3'>
            <div className={`${isActive ? '' : 'text-colors-textDisabled '} line-through `}>${plan.original}</div>
            <div className={`${isActive ? 'text-white' : ''} `}>${plan.price}</div>
          </div>
          <div>per day</div>
        </div>
      </div>
    </div>
  )
}

export default PlanCard
