import React, { useState } from 'react'
import { RootState } from '@/lib/store/index'
import PlanCard from './PlanCard/PlanCard'
import Header from '@/src/shared/Header/Header'
import BottomText from '@/src/shared/BottomText/BottomText'
import Image from '@/node_modules/next/image'
import { useAppSelector } from '@/lib/hooks'
import Button from '@/src/shared/Button/Button'
import WavyFlower from './WavyFlower'

type PlanProps = {
  fullpageApi: any
}

const Plan = ({ fullpageApi }: PlanProps) => {
  const { name, age, verified, price } = useAppSelector((state: RootState) => state.character)

  const [activeCard, setActiveCard] = useState<string>('')

  return (
    <div className='pt-12 min-h-screen flex flex-col justify-center'>
      <div className='flex items-center justify-center text-white px-6 relative'>
        <div className='flex flex-col md:flex-row items-center max-w-6xl w-full justify-around'>
          <div className='flex-1 flex items-stretch relative rounded-3xl overflow-hidden shadow-xl max-w-[350px] max-h-[300px]  sm:max-w-sm sm:max-h-full'>
            <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
              <source src='https://d12kahz818c96x.cloudfront.net/paywall/paywall-model-sfw.mp4' type='video/mp4' />
            </video>
            <div className='absolute flex bottom-4 left-4 text-lg font-bold'>
              {name}, <span className=' ml-1 opacity-80'>{age}</span>
              {verified === 'verified_model' && <Image src='/verified.svg' alt='status' width={16} height={16} className=' ml-2 object-contain' />}
            </div>
          </div>

          <div className='flex-1 max-w-lg pt-5 sm:pt-0'>
            <Header text='JOIN MY' pinkText='EXCLUSIVE' text2='FANCLUB COMMUNITY' fontSize='text-3xl md:text-[32px]' />
            <p className='mt-2 text-sm'>Get access to behind-the-scenes moments, special updates, and connect closer than ever.</p>

            <div className='mt-6 flex flex-col gap-5'>
              <PlanCard
                price={price ? +price : 10}
                namePlan='⭐ Most Popular'
                duration='monthly'
                isActive={activeCard === 'monthly'}
                onClick={() => setActiveCard('monthly')}
              />
              <PlanCard
                price={price ? +price : 10}
                namePlan='👑 VIP Exclusive'
                duration='annual'
                isActive={activeCard === 'annual'}
                onClick={() => setActiveCard('annual')}
              />
              <PlanCard
                price={price ? +price : 10}
                namePlan='🏆 Best Deal'
                duration='threeMonth'
                isActive={activeCard === 'threeMonth'}
                onClick={() => setActiveCard('threeMonth')}
              />

              <Button text={'UNLOCK EVERYTHING'} />
            </div>
          </div>
        </div>
      </div>

      <div className='top-14 right-4 absolute sm:bottom-10 sm:top-auto sm:right-10 block'>
        <WavyFlower text='Get Fanclub Deals' />
        <p className='text-[10px] text-center pt-3 text-colors-tetriary'>
          Cancel anytime. <br /> 100% secure.
        </p>
      </div>

      <BottomText icon text='Scroll & see what my boyfriends get 👀' onClick={() => fullpageApi?.moveSectionDown()} />
    </div>
  )
}

export default Plan
