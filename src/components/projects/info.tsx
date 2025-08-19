import React from 'react'
import Background from '../ui/background'
import BrutalButton from '../ui/brutal-ui/button'

export default function Info() {
  return (
    <div className='border-4 border-black  p-5 space-y-10 '>
        <h1 className='text-6xl uppercase font-bold'>I design products that people love</h1>
        <p className='text-xl text-black'>M1tra is a full-stack developer based in Saint-Petersburg, helping startups build beautiful, usable software fast. He combines clean code, intuitive UX, and creativity to turn ideas into products people enjoy.</p>
        <BrutalButton className='bg-red-400 py-5'>
          Hire me {"->"}
        </BrutalButton>
    </div>
  )
} 