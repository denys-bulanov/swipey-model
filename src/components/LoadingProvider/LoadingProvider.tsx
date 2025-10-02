'use client'

import { useAppSelector } from '@/lib/hooks'
import Header from '@/src/shared/Header/Header'

import FullScreenLoader from '../FullScreenLoader/FullScreenLoader'

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const { loading, error } = useAppSelector(state => state.character)

  if (error) {
    return (
      <div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
        <Header pinkText={error} text='' />
      </div>
    )
  }

  return (
    <>
      {children}
      {loading && <FullScreenLoader />}
    </>
  )
}
export default LoadingProvider
