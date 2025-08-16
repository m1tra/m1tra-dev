import React from 'react'
import Background from '../ui/background'

export default function Info() {
  return (
    <div className='border font-mono p-5 space-y-10 '>
        <h1 className='text-6xl font-bold'>I design products that people love</h1>
        <p className='text-xl text-gray-500'>M1tra is a full-stack developer based in Saint-Petersburg, helping startups build beautiful, usable software fast. He combines clean code, intuitive UX, and creativity to turn ideas into products people enjoy.</p>
        <button className='border  text-lg'>
            <Background className='px-5 py-2' color = "#ec4899, #8b5cf6">
                Hire me {"->"}
            </Background>
        </button>
    </div>
  )
}