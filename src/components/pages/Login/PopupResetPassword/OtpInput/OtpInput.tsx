import { useRef, useState } from 'react'

type OtpInputProps = {
  onChange: (code: string) => void
  isShowError: boolean
  setIsShowError: (arg: boolean) => void
}

const OtpInput = ({ onChange, isShowError, setIsShowError }: OtpInputProps) => {
  const [values, setValues] = useState<string[]>(Array(5).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    const newValues = [...values]
    newValues[index] = val
    setValues(newValues)
    setIsShowError(false)

    onChange?.(newValues.join(''))

    if (val && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <div className=' flex flex-col gap-2'>
      <div className='flex items-center w-full justify-center gap-4'>
        {values.map((value, i) => (
          <input
            key={i}
            ref={el => {
              inputsRef.current[i] = el
            }}
            type='text'
            value={value}
            maxLength={1}
            onChange={e => handleChange(e, i)}
            onKeyDown={e => handleKeyDown(e, i)}
            className={`w-14 h-14 text-white text-2xl text-center font-bold 
                       bg-colors-Back border ${isShowError ? 'border-colors-Red' : 'border-colors-divider'} rounded-lg 
                       focus:border-colors-Accent3 outline-none`}
          />
        ))}
      </div>
    </div>
  )
}
export default OtpInput
