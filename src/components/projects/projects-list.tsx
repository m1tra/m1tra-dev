import React from 'react'
import Project from './_ui/project'

export interface IProjects{
    title:string,
    stack:string[],
    href:string,
}

const projectsList:IProjects[] = [
        {
        title: 'Stars-starter',
        stack: ['nextJS','nestJS','TailwindCSS','PrismaORM'],
        href:'https://stars-starter-frontend.vercel.app/',
    },
    {
        title: 'ThinkSera',
        stack: ['nextJS','TailwindCSS','PrismaORM'],
        href:'https://educational-platform-by-m1tra.vercel.app',
    },
    {
        title: 'Ege-stars',
        stack: ['nextJS','nestJS','TailwindCSS','PrismaORM'],
        href:'https://ege-stars.vercel.app',
    },
    {
        title: 'OOO-gvozdoder',
        stack: ['nextJS','TailwindCSS'],
        href:'https://ooo-gvozdoder.vercel.app',
    },
    {
        title: 'Luch',
        stack: ['nextJS','TailwindCSS'],
        href:'https://luch-corp.vercel.app',
    },
]


export default function ProjectsList() {
  return (
    <div className='flex flex-col space-y-10 mb-5  '>
        {projectsList.map((project,index)=>(
            <Project {...project} key={index} index={index}/>
        ))}
    </div>
  )
}