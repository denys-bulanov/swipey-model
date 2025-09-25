import Button from '@/src/shared/Button/Button'
import Image from 'next/image'
import React from 'react'

type Option = {
  text: string
  emoji: string
}

type Question = {
  id: number
  text: string
  options: Option[]
}

type StepProps = {
  question: Question
  step: number
  totalSteps: number
  answer: string | null
  onAnswer: (answer: string) => void
  onNext: () => void
}

const Step = ({ question, step, totalSteps, answer, onAnswer, onNext }: StepProps) => {
  return (
    <div className='flex w-full flex-col items-center justify-center min-h-screen text-white p-6 pt-40 '>
      <div className='flex flex-col gap-4 w-full max-w-md mb-10'>
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => onAnswer(option.text)}
            className={`w-full flex justify-between backdrop-blur-3xl  px-6 py-3 border transition cursor-pointer
            rounded-bl-none rounded-br-2xl rounded-tl-2xl rounded-tr-2xl   transform  duration-300 ease-out
              ${answer === option.text ? 'border-white hover:skew-y-1' : 'bg-transparent border-gray-400/60 hover:-skew-y-1'}`}
          >
            <div>{option.text}</div>
            <Image width={20} height={20} src={option.emoji} alt='emoji' />
          </div>
        ))}
        <div className='pt-10'>
          <Button onClick={onNext} text={step < totalSteps - 1 ? 'Next Question' : 'Get my Results'} disabled={!answer} />
        </div>
      </div>
    </div>
  )
}

export default Step
