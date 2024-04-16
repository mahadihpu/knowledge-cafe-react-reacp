import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between border-b-2 pb-2'>
        <h1 className='text-4xl text-black font-semibold'>Knowledge Cafe</h1>
        <img src="https://api.multiavatar.com/stefan.svg" alt="emoji" className='inline-block h-8 w-8 rounded-full ring-2 ring-white' />
    </div>
  )
}


