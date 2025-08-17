import React from 'react'
import Card from '../brutal-ui/card'

import BrutalProgress from '../brutal-ui/progress'

const projects = [
  { name: "DESIGN", progress: 85 },
  { name: "FRONTEND", progress: 60 },
  { name: "BACKEND", progress: 40 },
  { name: "TESTING", progress: 20 },
]


export default function ProjectProgress() {
  return (
<Card className="bg-pink-400 flex flex-col justify-between p-10">
  <h3 className="font-extrabold uppercase text-2xl">Project progress</h3>
  
  <div className="w-full space-y-4  ">
    {projects.map((project, index) => (
      <div key={index}>
        <div className="flex justify-between">
          <span className="text-base">{project.name}</span>
          <span>{project.progress}%</span>
        </div>
        <BrutalProgress value={project.progress} />
      </div>
    ))}
  </div>

  <div className=" flex items-center justify-between ">
    <span className='text-xl'>Total progress</span>
    <span>
      {Math.round(
        projects.reduce((a, b) => a + b.progress, 0) / projects.length
      )}
      %
    </span>
  </div>
</Card>

  )
}