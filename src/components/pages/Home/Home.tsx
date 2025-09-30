'use client'
import React from 'react'
import Ask from '../../Ask/Ask'
import Message from '../../../shared/Message/Message'
import Cookies from 'js-cookie'

const Home = ({}) => {
  // const [open, setOpen] = useState(false)
  console.log('Все куки:', Cookies.get())
  console.log(document.cookie)

  return (
    <>
      <Message corner='bottom-left' text='Only 3 fanclub spots left today. Will you claim me?' animated />
      <Ask />

      {/* <button onClick={() => setOpen(true)} className='bg-gradient-to-r from-[#B14CEE] to-[#8049F3] text-white px-6 py-3 rounded-2xl'>
        Open Popup
      </button>

      <Popup isOpen={open} onClose={() => setOpen(false)} onAction={() => alert('Welcome!')} /> */}
    </>
  )
}

export default Home
