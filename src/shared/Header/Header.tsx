import React, { useEffect, useState } from 'react'

type HeaderProps = {
  text: string
  pinkText?: string
  pinkFirst?: boolean
  fontSize?: string
  animatedWord?: string
  text2?: string
}

const Header = ({ text, pinkText = '', pinkFirst = false, animatedWord = '', fontSize, text2 }: HeaderProps) => {
  const [displayed, setDisplayed] = useState('')
  const [cursorPos, setCursorPos] = useState(0)

  useEffect(() => {
    if (!animatedWord) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(animatedWord.slice(0, i + 1))
      setCursorPos(i + 2)
      i++
      if (i === animatedWord.length) clearInterval(interval)
    }, 500)
    return () => clearInterval(interval)
  }, [animatedWord])

  const pinkContent = animatedWord ? (
    <span className='text-colors-primary relative inline-block'>
      {displayed}
      <span className='absolute top-0 h-full w-1 bg-colors-primary animate-[blink_0.5s_steps(1)_infinite]' style={{ left: `${cursorPos}ch` }} />
    </span>
  ) : (
    <span className='text-colors-primary'>{pinkText}</span>
  )

  return (
    <>
      <p className={`uppercase font-bold font-anton tracking-wide leading-tight text-white ${fontSize ?? 'text-[40px] sm:text-6xl'}`}>
        {pinkFirst ? (
          <>
            {pinkContent} {text}
          </>
        ) : (
          <>
            {text} {pinkContent} {text2}
          </>
        )}
      </p>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Header
