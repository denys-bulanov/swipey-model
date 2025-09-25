import Image from '@/node_modules/next/image'
import Button from '@/src/shared/Button/Button'
import Message from '@/src/shared/Message/Message'
import React from 'react'

type FaqProps = {
  fullpageApi: any
}

const Faq = ({ fullpageApi }: FaqProps) => {
  const content = [
    {
      ask: {
        text: 'Can I see you without joining? ',
        emoji: '/faq/emoji1.svg',
      },
      answer: {
        text: 'No. Only my boyfriends can ',
      },
    },
    {
      ask: {
        text: 'Do I get tokens? ',
        emoji: '/Token.svg',
      },
      answer: {
        text: 'Yes, I gift a taste… but babe, you’ll want more ',
      },
    },
    {
      ask: {
        text: 'Can I tip you? ',
        emoji: '/faq/emoji2.svg',
      },
      answer: {
        text: 'Yes, with tokens /n Every time you spoil me, I spoil you back ',
      },
    },
    {
      ask: {
        text: 'Why not OF?',
        emoji: '/emoji/emoji3.svg',
      },
      answer: {
        text: 'Of teases. Here, I go further.',
      },
    },
    {
      ask: {
        text: 'Can I cancel?',
        emoji: '/inside/emoji1.svg',
      },
      answer: {
        text: 'Anytime, babe.',
      },
    },
  ]

  return (
    <div className='flex flex-col items-center text-center text-white min-h-screen px-4 pt-10'>
      <p className='text-5xl uppercase font-bold font-anton tracking-wide'>
        Frequently Asked <span className='text-colors-primary'>Questions</span>
      </p>

      <div className='custom-scroll w-full max-w-xl h-[528px] flex flex-col gap-3 bg-colors-back/90 backdrop-blur-xl rounded-xl p-4 overflow-y-auto mt-10 border border-white/20 mx-auto'>
        {content.map((item, i) => (
          <div key={i} className='flex flex-col gap-5 pb-5 border-b border-colors-divider last:border-b-0'>
            <div className='flex justify-start'>
              <Message corner='bottom-left' text={item.ask.text} background='opacity' avatar={null} emoji={item.ask.emoji} />
            </div>
            <div className='flex justify-end'>
              <Message corner='bottom-right' text={item.answer.text} background='pinkOpacity' avatar='square' avatarLeft />
            </div>
          </div>
        ))}
      </div>
      <div className='mt-10'>
        <Button text='Make Me Yours Now' />
      </div>
      <div className='sm:mt-auto border-t border-white/20  max-w-xl w-full mx-auto pt-5 mt-8 pb-5'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-4 items-center text-sm text-center'>
          <div className='flex justify-center items-center gap-1 cursor-pointer'>
            <Image src='/VerifiedGray.svg' alt='icon' width={16} height={16} />
            <span>Cancel Anytime</span>
          </div>
          <div
            className='flex justify-center items-center gap-1
                    border-l border-colors-divider sm:border-l sm:border-r 
                    px-2 cursor-pointer'
          >
            <Image src='/ListGray.svg' alt='icon' width={16} height={16} />
            <span> Discreet Billing</span>
          </div>
          <div className=' gap-1 col-span-2 sm:col-span-1 sm:pt-0 pt-4 flex justify-center items-center sm:justify-center mt-2 sm:mt-0 cursor-pointer'>
            <Image src='/ShieldGray.svg' alt='icon' width={16} height={16} />
            <span>100% Private & Secure</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
