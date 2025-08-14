'use client'

import { Layers, House, FolderKanban } from 'lucide'
import React, { createContext } from 'react'
import Slice from './_ui/slice'
import { LucideIcon } from "lucide-react";
import { usePathname } from 'next/navigation';

export interface SliceProps{
    href: string,
    title:string,
    icon:LucideIcon,
    color:string,
}

const slices:SliceProps[] = [
    {
        href: '/',
        title: 'Home',
        icon: House,
        color: "#06b6d4, #3b82f6, #9333ea",
    },
    {
        href: '/projects',
        title: 'Projects',
        icon: FolderKanban,
        color: "#ec4899, #8b5cf6, #f97316",
    },
    {
        href: '/stack',
        title: 'Stack',
        icon: Layers,
        color: "#f59e0b, #3b82f6, #10b981",
    },
]

export const SliceContext = createContext<SliceProps | null>(null)

type Props = {children:React.ReactNode}

export default function Navbar({children}:Props) {
  const path = usePathname()
  return (
    <div className={`fixed inset-0 flex `}>
        <div className='w-full'>{children}</div>
        <div className='flex'> 
            {slices.map((slice:SliceProps,index)=>(
                <SliceContext.Provider key={index} value={slice}>
                    {path !== slice.href &&
                        <Slice/>
                    }
                </SliceContext.Provider>   
            ))}
        </div>
    </div>
  )
}