import Button from '@/src/shared/Button/Button'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Header from '@/src/shared/Header/Header'

const Ask = ({}) => {
  const router = useRouter()
  const params = useParams()

  const handleClick = () => {
    router.push(`/${params.slug}/quiz`)
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 text-center pt-40 '>
      <Header text='as your girlfriend?' pinkText='Do you want me' pinkFirst />

      <div className='flex flex-col items-center justify-center mt-6 sm:mt-10 max-w-full sm:max-w-xl px-2'>
        <p className='w-full text-white tracking-tight font-poppins text-sm sm:text-lg text-center'>
          Take my <span className='font-bold'>30-second quiz</span>. If you pass, I’ll unlock <br /> my private fanclub just for you
        </p>

        <div className='mt-6 sm:mt-10'>
          <Button onClick={handleClick} text='Yes… Test If I’m Yours' />
        </div>
      </div>
    </div>
  )
}

export default Ask
