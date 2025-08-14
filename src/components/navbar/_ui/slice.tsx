import React, { useContext } from 'react'
import { SliceContext } from '../navbar'
import { Icon } from 'lucide-react';
import Link from 'next/link';


export default function Slice() {
  const slice = useContext(SliceContext)
  if (!slice){
    return
  }
  const { href,title,icon,color } = slice
  return (
    <Link href={href} className={` `}>
        <div 
            className='h-full pb-20 pt-10 w-25  flex justify-between flex-col-reverse items-center'
            style={{
                backgroundImage: (`url('/noise.svg'), linear-gradient(to bottom, ${color})`),
                backgroundBlendMode: 'overlay',
            }}
         >
            <span className='font-bold text-3xl -rotate-90 '>{title}</span>
            <Icon iconNode={icon} className="font-bold w-10 h-10"/>
        </div>
    </Link>
  )
}