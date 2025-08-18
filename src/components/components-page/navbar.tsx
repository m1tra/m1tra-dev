'use client'

import React from 'react'
import BrutalButton from '../ui/brutal-ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'
import Link from 'next/link'


const items = [
    {
        title:"examples",
        href:"/stack"
    }, 
    {
        title:"components",
        href:"/stack/components"
    }, 
    {
        title:"icons",
        href:"/stack/icons"
    }
]

export default function NavBar() {
    const path = usePathname()
    console.log(path)
    return (
      <div className='flex gap-2 flex-wrap'>
          {items.map((item, index)=>(
            <Link href={item.href} key={index} >
              <BrutalButton key={index} variant='outline' className={cn(' py-6 hover:bg-yellow-400',
                path == item.href && "bg-red-400 hover:bg-red-400"
              )}>
                  <span>{item.title}</span>
              </BrutalButton>
            </Link>
          ))}
      </div>
    )
}