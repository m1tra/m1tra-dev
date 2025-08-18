'use client'

import React from 'react'
import Card from '../brutal-ui/card'
import BrutalInput from '../brutal-ui/input'
import BrutalButton from '../brutal-ui/button'



export default function FormExample() {


  return (
    <Card className="bg-cyan-400 flex flex-col gap-3 justify-between p-10 aspect-square w-full items-center" >
        <h3 className="font-extrabold uppercase text-2xl">CREATE AN ACCOUNT</h3>
        <p className='text-sm'>Enter your email below to create your account</p>
        <div className='w-full flex flex-col gap-4'>
            <BrutalInput className='bg-white' placeholder='name@example.com'/>
            <BrutalButton className='w-full rounded-sm bg-green-400 hover:bg-black hover:text-white text-black'>Create account</BrutalButton>
        </div>
        <span>OR CONTINUE WITH</span>
        <div className='w-full flex flex-col gap-4'>
            <BrutalButton className='w-full rounded-sm hover:bg-white hover:text-black'>🐙 github</BrutalButton>
            <BrutalButton className='w-full rounded-sm hover:bg-red-400' variant='outline'>🔍 google</BrutalButton>
        </div>
    </Card>
  )
}
