import Image from '@/node_modules/next/image'
import BottomText from '@/src/shared/BottomText/BottomText'
import Button from '@/src/shared/Button/Button'
import Header from '@/src/shared/Header/Header'
import React from 'react'
type PreviewClubProps = {
  fullpageApi: any
}

const PreviewClub = ({ fullpageApi }: PreviewClubProps) => {
  const handleClick = () => {}
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center text-center px-4'>
      <div className='flex flex-col items-center justify-center'>
        <Image src='/Close.svg' alt='icon' width={22} height={29} className='pb-10' />

        <Header text='This is what my boyfriends see' pinkText='daily' />

        <div className='flex flex-col items-center justify-center mt-10'>
          <Button onClick={handleClick} text='Unlock My Fanclub Now' icon />
        </div>
      </div>

      <div className='absolute bottom-6 w-full flex justify-center'>
        <BottomText text='Still unsure? Scroll down & I’ll show you more 💕' icon onClick={() => fullpageApi?.moveSectionDown()} />
      </div>
    </div>
  )
}

export default PreviewClub
