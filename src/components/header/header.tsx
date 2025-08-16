import React from 'react'

export default function Header() {
  return (
    <header className='fixed top-2 left-1/2 -translate-x-1/2 z-50'>
      <div className='px-5 py-1 rounded-full border bg-black/50'>
        <span className='text-5xl font-bold font-mono uppercase '>MITRA</span>
      </div>
    </header>
  )
}