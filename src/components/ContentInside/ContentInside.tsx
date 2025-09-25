import Button from '@/src/shared/Button/Button'
import Message from '@/src/shared/Message/Message'
import Image from 'next/image'
import React from 'react'
type ContentInsideProps = {
  fullpageApi: any
}

const ContentInside = ({ fullpageApi }: ContentInsideProps) => {
  const options = [
    {
      icon: '/inside/emoji1.svg',
      text: 'My private profile',
    },
    {
      icon: '/inside/emoji2.svg',
      text: 'Fanclub-only posts + stories',
    },
    {
      icon: '/inside/emoji3.svg',
      text: 'NSFW PPVs',
    },
    {
      icon: '/inside/emoji4.svg',
      text: 'Direct chat',
    },
    {
      icon: '/inside/emoji5.svg',
      text: 'Custom videos in minutes',
    },
    {
      icon: '/inside/emoji6.svg',
      text: 'The full Girlfriend Experience',
    },
  ]

  const handleClick = () => {}
  return (
    <div className='pt-10 min-h-screen flex flex-col justify-center items-center px-4 text-white'>
      <p className='text-5xl uppercase font-bold text-white font-anton tracking-wide text-center'>
        What you get <span className='text-colors-primary'>inside</span>
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl w-full mt-10'>
        {options.map((item, idx) => (
          <div
            key={idx}
            className='bg-white/10 backdrop-blur-2xl p-6 rounded-xl border border-white/20 hover:-rotate-2 cursor-pointer flex flex-col items-center justify-center gap-4 text-center'
          >
            {/* <div>{item.icon}</div> */}
            <Image src={item.icon} alt='emoji' width={26} height={26} />
            <div>{item.text}</div>
          </div>
        ))}
      </div>

      <div
        className='bg-white/10 backdrop-blur-2xl p-6
                flex flex-col items-center text-center
                border-white/20
                sm:flex-row sm:justify-between sm:items-start sm:text-left
                mt-4 max-w-2xl w-full rounded-xl border hover:rotate-2 cursor-pointer gap-3'
      >
        <div className='flex flex-col items-center sm:flex-row gap-2'>
          <Image src='/Token.svg' alt='emoji' width={26} height={26} />

          <div className='font-medium'>Ability to tip me with tokens</div>
        </div>

        <div className='text-colors-primary mt-2 sm:mt-0'>...and I’ll spoil you back</div>
      </div>

      <div className='mt-5'>
        <Button onClick={handleClick} text='Get Fanclub Deals' background='pink' />
      </div>

      <div className='mt-5 w-full flex flex-col items-center gap-6 '>
        <div className='w-full max-w-2xl border-t border-white/20' />
        <div>Fanclub Members Say…</div>
        <div className='flex flex-col items-center gap-4 relative'>
          <div className='flex flex-row gap-3'>
            <div className='-rotate-6 sm:mr-5 -mr-3'>
              <Message corner='top-left' avatar={null} background='neon' text='Feels like she’s really/n my girlfriend' />
            </div>
            <div className='rotate-6 sm:-ml-3 -ml-3  z-20'>
              <Message corner='top-right' avatar={null} background='neon' text='Tokens go fast…/n but worth every penny' />
            </div>
          </div>
          <div className='rotate-2 sm:-mt-7 -mt-6 z-10'>
            <Message corner='bottom-left' avatar={null} background='neon' text='She made me a video/n whispering my name' />
          </div>
        </div>
      </div>
      <div className='mt-10 sm:pb-0 pb-5'>
        <Button text='Make Me Yours Now' />
      </div>
    </div>
  )
}

export default ContentInside
