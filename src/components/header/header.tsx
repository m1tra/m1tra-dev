'use client'

import { motion } from 'motion/react'
import React from 'react'

export default function Header() {
  return (
    <motion.header
      initial={{
        top:"50%",
        scale:1.7
      }}
      animate={{
        top:2,
        scale:1
      }} 
      transition={{duration:0.5, delay:0.5, type:"spring"}}
      className='fixed top-2 left-1/2 -translate-x-1/2 z-50'>
      <div className='text-5xl  font-bold font-mono uppercase text-center leading-snug   max-w-2xl'>
        <span className='  relative inline-block px-6 py-3 text-5xl'>MITRA
        <svg width="218" height="84" viewBox="0 0 218 84" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{pathLength:0}}
            animate={{pathLength:1}} 
            transition={{duration:0.5}}
            d="M3 81V3H215V81H3Z" stroke="black" strokeWidth={5}/>
        </svg>
        </span>
      </div>
    </motion.header>
  )
}