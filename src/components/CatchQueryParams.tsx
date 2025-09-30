'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CatchQueryParams() {
  useEffect(() => {
    // сразу достаём параметры из URL
    const params = new URLSearchParams(window.location.search)
    const entries: { [key: string]: string } = {}
    params.forEach((value, key) => {
      entries[key] = value
    })

    // Сохраняем куда нужно, например в Redux или LocalStorage
    console.log('Все query-параметры:', entries)
    localStorage.setItem('utm_params', JSON.stringify(entries))
  }, [])

  return null // компонент ничего не рендерит
}
