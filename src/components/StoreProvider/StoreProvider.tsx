'use client'

import { Provider } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'
import { fetchCharacter } from '@/lib/store/slices/characterSlice'
import { store } from '@/lib/store/index'
import { useParams } from 'next/navigation'

function InitCharacter() {
  const dispatch = useAppDispatch()
  const params = useParams()
  const alreadyLoaded = useAppSelector(state => !!state.character.slug)

  useEffect(() => {
    if (!alreadyLoaded && params?.slug) {
      dispatch(fetchCharacter(`${params.slug}`))
    }
  }, [dispatch, params, alreadyLoaded])

  return null
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('StoreProvider mounted', store, window.location.href)
    return () => console.log('StoreProvider unmounted', window.location.href)
  }, [])

  return (
    <Provider store={store}>
      <InitCharacter />
      {children}
    </Provider>
  )
}
