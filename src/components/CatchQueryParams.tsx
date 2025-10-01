'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CatchQueryParams() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const entries: { [key: string]: string } = {}
    params.forEach((value, key) => {
      entries[key] = value
    })

    localStorage.setItem('utm_params', JSON.stringify(entries))
  }, [])

  return null
}
