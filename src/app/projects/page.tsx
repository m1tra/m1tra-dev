// pages/project.tsx
import ProjectData from '@/components/projects/_ui/project-data'
import Info from '@/components/projects/info'
import ProjectsList from '@/components/projects/projects-list'
import React from 'react'

export default function Project() {
  return (
    <main className="mt-20 px-10 font-mono">
      <div className='w-full grid grid-cols-4 gap-5 min-h-[calc(100vh-100px)] '>
        <div className='col-span-1 flex flex-col space-y-5'>
          <Info />
          <div className='border flex-1 flex items-center justify-center'>
            <ProjectData/>  
          </div> 
        </div>
        <div className='col-span-3'>
          <ProjectsList />
        </div>
      </div>
    </main>
  )
}
