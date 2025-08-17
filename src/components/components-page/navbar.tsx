'use client'

import React from 'react'
import Button from '../ui/brutal-ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'

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
      <div className='flex gap-2'>
          {items.map((item, index)=>(
              <Button key={index} className={cn('py-3',
                path == item.href && "bg-red-400"
              )}>
                  <span>{item.title}</span>
              </Button>
          ))}
      </div>
    )
}