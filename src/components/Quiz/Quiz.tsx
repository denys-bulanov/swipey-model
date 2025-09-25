'use client'

import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store/index'
import Message from '@/src/shared/Message/Message'
import React, { useEffect, useState } from 'react'
import FinalStep from './FinalStep/FinalStep'
import Step from './Step/Step'

const questions = [
  {
    id: 1,
    text: 'How should I spoil you/n inside my fanclub?',
    options: [
      {
        text: 'Cute girlfriend selfies',
        emoji: '/emoji/emoji1.svg',
      },
      {
        text: 'Nude drops',
        emoji: '/emoji/emoji2.svg',
      },
      {
        text: 'Customs whispering your name',
        emoji: '/emoji/emoji3.svg',
      },
    ],
  },
  {
    id: 2,
    text: 'How often do you/n want me?',
    options: [
      {
        text: 'Daily',
        emoji: '/emoji/emoji4.svg',
      },
      {
        text: 'All Day',
        emoji: '/emoji/emoji5.svg',
      },
      {
        text: 'Non-stop',
        emoji: '/emoji/emoji6.svg',
      },
    ],
  },
  {
    id: 3,
    text: 'If I was your private girlfriend…/n how would you treat me?',
    options: [
      {
        text: 'I’d spoil you with tokens',
        emoji: '/Token.svg',
      },
      {
        text: 'I’d keep you all to myself',
        emoji: '/emoji/emoji7.svg',
      },
      {
        text: 'I’d never let you go',
        emoji: '/emoji/emoji8.svg',
      },
    ],
  },
  {
    id: 4,
    text: 'stars',
    options: [],
  },
]

const Quiz = ({}) => {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null))
  const [showFinalContent, setShowFinalContent] = useState(false)

  const character = useAppSelector((state: RootState) => state.character)

  console.log('character', character)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[step] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      console.log('Finished! Answers:', answers)
    }
  }

  useEffect(() => {
    if (step === questions.length - 1) {
      const timer = setTimeout(() => {
        setShowFinalContent(true)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [step])

  const corners = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const

  const updatedFinalText = 'Mmm… I love your answers'
  return (
    <>
      <Message
        corner={corners[step]}
        text={step === questions.length - 1 && showFinalContent ? updatedFinalText : questions[step].text}
        animated
        avatar={questions[step].text === 'stars' ? null : 'base'}
      />
      {step < questions.length - 1 && (
        <Step
          question={questions[step]}
          step={step}
          totalSteps={questions.length}
          answer={answers[step]}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {step === questions.length - 1 && showFinalContent && <FinalStep />}
    </>
  )
}

export default Quiz
