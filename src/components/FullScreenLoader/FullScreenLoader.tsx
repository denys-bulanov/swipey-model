import React from 'react'

const FullScreenLoader = () => {
  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
      <div className='w-16 h-16 border-4 border-t-pink-500 border-gray-300 rounded-full animate-spin' />
    </div>
  )
}

export default FullScreenLoader
