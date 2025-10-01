'use client'

import Image from '@/node_modules/next/image'
import { signInApi, signUpApi } from '@/src/api/authApi'
import Button from '@/src/shared/Button/Button'
import Header from '@/src/shared/Header/Header'
import Message from '@/src/shared/Message/Message'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import PopupResetPassword from './PopupResetPassword/PopupResetPassword'

const Login = () => {
  const router = useRouter()
  const params = useParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  const handleRegister = () => {
    router.push(`/${params.slug}/register`)
  }

  const handleForgotPassword = () => {
    setIsOpen(true)
    // router.push(`/${params.slug}/register`)
  }

  const signInHandler = async () => {
    const { data, err } = await signInApi({ email, password })

    setLoading(false)

    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)

      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      console.log('Успешный логин:', data)

      // const url = `https://${process.env.NEXT_PUBLIC_URL}/${params.slug}/paywall?auth_token=${data.authToken}&auth_type=login_paywall`
      // router.push(url)

      const raw = localStorage.getItem('utm_params')
      let queryString = ''
      if (raw) {
        const utm_params = JSON.parse(raw)

        queryString = Object.entries(utm_params)
          .filter(([_, value]) => value)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
          .join('&')
        if (queryString) {
          queryString += '&'
        }
      }

      const url = `https://${process.env.NEXT_PUBLIC_URL}/${params.slug}/paywall?${queryString}auth_token=${data.authToken}&auth_type=login_paywall`
      console.log('url', url)

      router.push(url)
    }
  }

  const handleClick = async () => {
    setLoading(true)
    await signInHandler()
  }

  return (
    <>
      <PopupResetPassword onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <Message corner='bottom-right' text='You’re almost/n inside me' animated avatar='base' />
      <div className='flex flex-col justify-between items-center px-6 py-10 min-h-screen text-white'>
        <div className='pt-40 text-center flex flex-col items-center justify-center'>
          <Header text='OH, IT’S' pinkText='you' text2='again...' />
          <p className='text-white mt-6 sm:mt-10 tracking-tight max-w-md sm:max-w-lg text-center font-poppins text-sm sm:text-base'>
            Ready to be mine all over?
          </p>
          <div className='flex flex-col items-center justify-center mt-6 sm:mt-10 w-full max-w-md gap-4'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => setEmail(e.target.value)}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
            <div className='relative w-full'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                onChange={e => setPassword(e.target.value)}
                className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40 text-sm sm:text-base pr-10'
              />
              <button type='button' onClick={togglePassword} className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                <Image
                  src={showPassword ? '/Eye.svg' : '/hidden.svg'}
                  alt={showPassword ? 'Hide password' : 'Show password'}
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div onClick={handleForgotPassword} className='cursor-pointer flex items-start w-full sm:px-6 mt-2'>
            <span className='text-colors-Accent3 text-sm'>Forgot Password?</span>
          </div>
          {errorMsg && (
            <div className='bg-red-500 rounded-2xl px-5 py-1  mt-4'>
              <p>{errorMsg}</p>
            </div>
          )}
          <div className='mt-6 sm:mt-10 w-full max-w-md'>
            <Button text={loading ? 'Loading...' : 'Continue & Get Closer To Me'} icon onClick={handleClick} />
          </div>
        </div>
        <div className='flex items-center gap-3 text-sm'>
          <span>Don't have an account?</span>
          <div className='flex items-center cursor-pointer' onClick={handleRegister}>
            <span className='text-colors-Accent3'>Sign up</span>
            <Image src='/ArrowPurple.svg' alt='arrow' width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
