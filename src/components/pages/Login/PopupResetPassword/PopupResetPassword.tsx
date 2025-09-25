'use client'

import React, { useEffect, useRef, useState } from 'react'
import Button from '@/src/shared/Button/Button'
import Image from '@/node_modules/next/image'
import { newPasswordApi, otpApi, resetPasswordApi } from '@/src/api/authApi'
import OtpInput from './OtpInput/OtpInput'

type PopupResetPasswordProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  actionText?: string
  onAction?: () => void
}

const PopupResetPassword = ({ isOpen, onClose, onAction }: PopupResetPasswordProps) => {
  if (!isOpen) return null
  const [email, setEmail] = useState('')
  const [isSuccessRequest, setIsSuccessRequest] = useState(false)
  const [isNewPassword, setIsNewPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [isPasswordTheSame, setIsPasswordTheSame] = useState(false)
  const [isAllDone, setIsAllDone] = useState(false)
  const [token, setToken] = useState('')
  const [otp, setOtp] = useState('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [isShowError, setIsShowError] = useState(false)

  function maskEmail(email: string): string {
    const [localPart, domain] = email.split('@')

    if (localPart.length <= 1) {
      return `*@${domain}` // если имя слишком короткое
    }

    const lastChar = localPart.slice(-1) // последний символ
    return `${'*'.repeat(localPart.length - 1)}${lastChar}@${domain}`
  }
  useEffect(() => {
    setErrorMsg(null)
  }, [])

  const handleResetPassword = async () => {
    const { data, err } = await resetPasswordApi({ email })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsSuccessRequest(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsSuccessRequest(true)
      console.log('Успешный логин:', data)
      setErrorMsg(null)
    }
  }

  const handleVerifyCode = async () => {
    const { data, err } = await otpApi({ email, otp })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsNewPassword(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsNewPassword(true)
      console.log('Успешный логин:', data)
      setToken(data.token)
      setErrorMsg(null)
    }
  }

  const handleNewPassword = async () => {
    const { data, err } = await newPasswordApi({ newPassword: password, token })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsAllDone(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsAllDone(true)
      console.log('Успешный логин:', data)
      setErrorMsg(null)
    }
  }
  const togglePassword = (isRepeat: boolean) => {
    isRepeat ? setShowRepeatPassword(prev => !prev) : setShowPassword(prev => !prev)
  }

  useEffect(() => {
    if (password === repeatPassword) {
      setIsPasswordTheSame(true)
    } else {
      setIsPasswordTheSame(false)
    }
  }, [password, repeatPassword])

  useEffect(() => {
    if (errorMsg) {
      setIsShowError(true)
    }
  }, [errorMsg])

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4'>
      <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg  rounded-3xl bg-colors-back_2 border border-colors-divider overflow-hidden text-white shadow-lg transform transition-all duration-500 scale-100'>
        <div className='relative flex flex-col text-center gap-6  h-full p-4 sm:p-6 md:p-10 '>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white text-xl
                   bg-white/20 rounded-full hover:bg-white/30 transition'
          >
            &times;
          </button>

          <div className='flex flex-col gap-2'>
            <p className='text-[28px]'>
              {isAllDone && isSuccessRequest && isNewPassword
                ? 'Password Updated Successfully'
                : isSuccessRequest && isNewPassword
                  ? 'Set a New Password'
                  : isSuccessRequest
                    ? 'Check Your Email'
                    : 'Reset Your Password'}
            </p>
            <p className='text-sm text-colors-Text_Secondary'>
              {isAllDone && isSuccessRequest && isNewPassword
                ? 'You can now log in with your new password.'
                : isSuccessRequest && isNewPassword
                  ? 'Create a strong new password to secure your Swipey account and continue.'
                  : isSuccessRequest
                    ? `A verification code has been sent to ${maskEmail(email)}`
                    : 'Enter your email and we’ll send you a code to create a new password for your Swipey account.'}
            </p>
          </div>
          <div>
            {!isAllDone ? (
              isSuccessRequest && isNewPassword ? (
                <div className='flex flex-col gap-5 text-left'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-colors-Text_Secondary text-sm pl-1 '>New password</label>
                    <div className='relative w-full'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        // placeholder='New password'
                        value={password}
                        autoComplete='off'
                        spellCheck='false'
                        autoCorrect='off'
                        onChange={e => (setPassword(e.target.value), setIsShowError(false))}
                        className='w-full bg-colors-back backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-colors-divider rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/20 text-sm sm:text-base'
                      />
                      <button type='button' onClick={() => togglePassword(false)} className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        <Image
                          src={showPassword ? '/Eye.svg' : '/hidden.svg'}
                          alt={showPassword ? 'Hide password' : 'Show password'}
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-colors-Text_Secondary text-sm pl-1'>Repeat password</label>
                    <div className='relative w-full'>
                      <input
                        type={showRepeatPassword ? 'text' : 'password'}
                        // placeholder='Repeat password'
                        value={repeatPassword}
                        autoComplete='off'
                        spellCheck='false'
                        autoCorrect='off'
                        onChange={e => (setRepeatPassword(e.target.value), setIsShowError(false))}
                        className='w-full bg-colors-back backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-colors-divider rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/20 text-sm sm:text-base'
                      />
                      <button type='button' onClick={() => togglePassword(true)} className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        <Image
                          src={showRepeatPassword ? '/Eye.svg' : '/hidden.svg'}
                          alt={showRepeatPassword ? 'Hide password' : 'Show password'}
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>

                  {password && repeatPassword ? (
                    <div>
                      {isPasswordTheSame ? (
                        <div className='text-colors-customGreen text-sm flex gap-2 items-start'>
                          <Image src='/pass.svg' width={16} height={16} alt='icon' />
                          <p>Passwords Match</p>
                        </div>
                      ) : (
                        <div className='text-colors-Red text-sm flex gap-2 items-center'>
                          <Image src='/cross.svg' width={16} height={16} alt='icon' />
                          <p>Passwords Not Match</p>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : isSuccessRequest ? (
                <OtpInput onChange={code => setOtp(code)} setIsShowError={setIsShowError} isShowError={isShowError} />
              ) : (
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  autoComplete='off'
                  spellCheck='false'
                  autoCorrect='off'
                  onChange={e => (setEmail(e.target.value), setIsShowError(false))}
                  className='w-full bg-colors-back backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-colors-divider rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/20 text-sm sm:text-base'
                />
              )
            ) : null}

            {isShowError && (
              <div>
                <span className='text-colors-Red text-sm'>{errorMsg}</span>
              </div>
            )}
          </div>
          <div className='text-center flex flex-col gap-2'>
            <Button
              text={
                isAllDone && isSuccessRequest && isNewPassword
                  ? 'Go to Log In'
                  : isSuccessRequest && isNewPassword
                    ? 'Set New Password'
                    : isSuccessRequest
                      ? 'Verify'
                      : 'Send'
              }
              onClick={
                isAllDone && isSuccessRequest && isNewPassword
                  ? onClose
                  : isSuccessRequest && isNewPassword
                    ? handleNewPassword
                    : isSuccessRequest
                      ? handleVerifyCode
                      : handleResetPassword
              }
              disabled={isSuccessRequest && otp.length !== 5 ? true : isNewPassword ? !isPasswordTheSame : false}
            />
            {!isNewPassword && (
              <Button
                text={isSuccessRequest ? 'Resend Code' : 'Back to Log In'}
                onClick={isSuccessRequest ? handleResetPassword : onClose}
                background='gray'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupResetPassword
