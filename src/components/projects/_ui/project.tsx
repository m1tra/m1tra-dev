import React from 'react'
import { IProjects } from '../projects-list'

export default function Project({title, href, stack}:IProjects) {
  return (
    <div>
        <iframe src={href} className='h-[calc(100vh-100px)] border w-full'></iframe>
    </div>
  )
}