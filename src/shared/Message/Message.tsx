import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store/index'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Star from '../Star/Star'

type MessageProps = {
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  text: string
  background?: 'pink' | 'opacity' | 'neon' | 'transparent' | 'pinkOpacity'
  avatar?: 'base' | 'square' | null
  animated?: boolean
  emoji?: string
  avatarLeft?: boolean
  pinkOpacity?: boolean
}

const Message = ({
  corner = 'bottom-left',
  text,
  background = 'pink',
  avatar = 'base',
  animated = false,
  emoji,
  avatarLeft = false,
}: MessageProps) => {
  const { picture } = useAppSelector((state: RootState) => state.character)

  const borderRadiusClass = {
    'top-left': 'rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-3xl',
    'top-right': 'rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-3xl',
    'bottom-left': 'rounded-bl-none rounded-br-3xl rounded-tl-xl rounded-tr-3xl',
    'bottom-right': 'rounded-br-none rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl',
  }[corner]

  const positionClass = {
    'top-left': ' sm:top-[30%] top-[30%] sm:right-[15%] right-[10%]',
    'top-right': 'sm:top-[30%] top-[30%] sm:right-[45%] right-[30%]',
    'bottom-left': 'top-[15%] sm:top-[10%] right-[5%] sm:right-[10%]',
    'bottom-right': 'top-[15%] sm:top-[10%] sm:right-[30%] right-[20%]',
  }[corner]

  const backgroundClass = {
    pink: 'bg-g_pink_message',
    opacity: 'bg-white/10',
    transparent: 'bg-transparent',
    neon: 'bg-g_neonPinkToPink ',
    pinkOpacity: 'bg-g_pink_message_opacity',
  }[background]

  const borderClass =
    background === 'opacity'
      ? ' border-white/20'
      : background === 'pinkOpacity'
        ? 'border-colors-border_message_pink_opacity'
        : 'border-colors-border_message_pink/60'

  const [visible, setVisible] = useState(true)
  const [displayText, setDisplayText] = useState(text)
  const [displayCorner, setDisplayCorner] = useState(corner)

  useEffect(() => {
    if (animated && (text !== displayText || corner !== displayCorner)) {
      setVisible(false)
      const timeout = setTimeout(() => {
        setDisplayText(text)
        setDisplayCorner(corner)
        setVisible(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [text, corner, displayText, displayCorner, animated])

  const StarAnimation = () => {
    return (
      <div className='flex flex-col items-center w-6 gap-0 relative'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`${i % 2 === 0 ? 'self-end' : 'self-start'}`}>
            <Star size='w-3 h-3' className='animate-sparkle' opacity='1' style={{ animationDelay: `${i * 0.3}s` }} />
          </div>
        ))}
      </div>
    )
  }

  const transformClass = () => {
    if (!animated) return 'translate-x-0 opacity-100'
    const isRight = displayCorner.includes('right')
    return visible ? 'translate-x-0 opacity-100' : isRight ? 'translate-x-10 opacity-0' : 'translate-x-[-10px] opacity-0'
  }

  const isRight = displayCorner.includes('right')

  return (
    <div
      className={`border max-w-[300px] sm:max-w-[400px] inline-flex items-start gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 z-10
    ${animated ? `${positionClass} absolute` : ''}
    ${borderRadiusClass}
    ${backgroundClass}
    ${borderClass}
    ${background !== 'opacity' ? 'shadow-pinkPurple' : ''}
    transition-all duration-500 ease-in-out
    ${transformClass()}
    ${avatarLeft ? 'flex-row' : isRight ? 'flex-row-reverse' : 'flex-row'}
    ${avatarLeft && 'items-center'}
    `}
    >
      {avatar && picture && (
        <div className='relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0'>
          <div
            className={`w-full h-full border border-white/30 overflow-hidden flex-shrink-0 relative ${avatar === 'base' ? 'rounded-full' : 'rounded-md'}`}
          >
            <Image src={picture || ''} alt='avatar' fill className='object-cover' />
          </div>

          {!avatarLeft && (
            <div
              className={`absolute ${
                avatar === 'base' ? 'bottom-0 right-0 ' : '-bottom-1 -right-1 '
              } w-3 h-3 sm:w-4 sm:h-4 rounded-full overflow-hidden`}
            >
              <Image src='/verified.svg' alt='status' width={16} height={16} className='object-contain' />
            </div>
          )}
        </div>
      )}

      {displayText === 'stars' || text === 'stars' ? (
        StarAnimation()
      ) : (
        <p className='text-white tracking-tight text-sm sm:text-base leading-snug break-words text-left'>
          {animated ? (
            <>
              {displayText.split('/n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              {text.split('/n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </>
          )}
        </p>
      )}
      {emoji && <Image src={emoji} alt='emoji' width={24} height={24} />}
    </div>
  )
}

export default Message
