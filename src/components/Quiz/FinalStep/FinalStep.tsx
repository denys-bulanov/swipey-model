import Button from '@/src/shared/Button/Button'
import Header from '@/src/shared/Header/Header'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const FinalStep = ({}) => {
  const router = useRouter()
  const params = useParams()

  const handleClick = () => {
    router.push(`/${params.slug}/register`)
  }

  return (
    <div className='min-h-screen  flex flex-col items-center justify-center px-4 text-center  pt-40 '>
      <Header text='You’re exactly the kind of boyfriend i' animatedWord='want.' />
      <div className='flex flex-col items-center justify-center mt-6 sm:mt-10 max-w-full sm:max-w-lg px-2'>
        <p className='text-white tracking-tight font-poppins text-base sm:text-lg text-center mt-4 sm:mt-10'>
          Wanna see what I only show my fanclub?
        </p>

        <div className='mt-6 sm:mt-10'>
          <Button onClick={handleClick} text='Yes… Unlock Me Now' icon />
        </div>
      </div>
    </div>
  )
}

export default FinalStep
