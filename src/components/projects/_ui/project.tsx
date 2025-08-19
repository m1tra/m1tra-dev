import React from 'react'
import { IProjects } from '../projects-list'
import Card from '@/components/ui/brutal-ui/card'

interface ProjectProps extends IProjects{
  index:number
}

export default function Project({title, href, stack, index}:ProjectProps) {
  const colors = ["bg-yellow-400", "bg-rose-400", "bg-blue-400", "bg-emerald-400"]
  const accentColor = colors[index % colors.length]
  return (
    <div className='space-y-5 group'>
      <div className="">
        <div
          className={`inline-block px-6 py-3 ${accentColor}  border-4 border-black transform -rotate-1 group-hover:rotate-0 transition-transform duration-200`}
        >
          <h2 className="text-2xl font-black text-black tracking-tight">{title}</h2>
        </div>
      </div>

      <div className='flex flex-wrap gap-2'>
        {stack.map((item,index)=>(
          <Card className='bg-black text-white py-0 px-2 text-sm font-extrabold' key={index}>{item}</Card>
        ))}
      </div>

      <div className='relative mb-2'>
        <div className='bg-black w-full absolute h-full -left-2 -top-2 '></div>
        <div className="relative bg-white border-4 border-black overflow-hidden group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200">
          <iframe 
            src={href} 
            className="h-80 w-full border-0" 
            title={title} 
          />
        
          {/* Overlay появляется только на hover */}
          <div className="absolute inset-0 hidden group-hover:flex bg-black bg-opacity-20 transition-all duration-200 items-center justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black px-6 py-3 font-black text-black uppercase tracking-wide hover:bg-yellow-400 transform hover:scale-105"
            >
              ОТКРЫТЬ ПРОЕКТ
            </a>
          </div>
        </div>

      </div>

      <div className="mt-4 text-right">
        <span className="text-6xl font-black text-gray-200 leading-none">{String(index + 1).padStart(2, "0")}</span>
      </div>

    </div>
  )
}