'use client'

import { useAppSelector } from '@/lib/hooks'

import FullScreenLoader from '../FullScreenLoader/FullScreenLoader'

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const loading = useAppSelector(state => state.character.loading)

  return (
    <>
      {children}
      {loading && <FullScreenLoader />}
    </>
  )
}
export default LoadingProvider
