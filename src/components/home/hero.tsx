'use client'

import React from 'react'
import BrutalButton from '../ui/brutal-ui/button'
import { cn } from '../lib/utils'
import Link from 'next/link'
import Image from "next/image";
import BrutalIconButton from '../ui/brutal-ui/icon-button';
import { BookOpen, CalendarDays, Mail, MapPin } from 'lucide-react';
import { motion, useDragControls } from 'motion/react';
import RoadMap from './_ui/road-map'


export default function Hero() {
  const controls = useDragControls()
  return (
    <section className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-30 py-20">
      <div className='space-y-10'>
        <div className='flex gap-10 pt-5 sm:flex-row flex-col'>
          <div className='flex md:justify-end lg:justify-center gap-5 flex-col items-start'>
            <h1 className='text-6xl uppercase font-black'>Hey, i&apos;m mitra</h1>
            <div className="flex flex-wrap justify-start sm:justify-center gap-4">
              <Link href={"/stack"}>
                <BrutalButton className="uppercase py-4 px-8" variant="default">
                  View layouts
                </BrutalButton>
              </Link>
              <Link href={"/projects"}>
                <BrutalButton
                  variant="outline"
                  className={cn("px-8 py-4 uppercase")}
                >
                  My projects
                </BrutalButton>
              </Link>

            </div>

          </div>
          <div className='flex gap-5 flex-col xl:flex-row'>
            <div className='uppercase font-extrabold  text-lg h-16 flex items-center px-10 bg-purple-400 -rotate-1  border-4 border-black hover:-translate-y-2  duration-150'>Existing to die</div>
            <div className='uppercase font-extrabold  text-lg h-16 flex items-center px-10 bg-pink-400 rotate-1  border-4 border-black hover:-translate-y-2  duration-150'>Living to thrive</div>
            <div className='uppercase font-extrabold  text-lg h-16 flex items-center px-10 bg-fuchsia-400 -rotate-1  border-4 border-black hover:-translate-y-2  duration-150'>Create to survive</div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative w-full'>
          <div className='border-4 border-black aspect-square w-full'>

          </div>
          <div className='flex flex-col  gap-5 '>
            <h3 className='uppercase text-4xl font-bold'>Mitra</h3>
            <p className='uppercase text-xl font-bold'>Fullstack Developer</p>
            <div className=' flex flex-col'>
              <div className='flex gap-2 items-center'>
                <MapPin />
                <span className=' text-xl font-semibold'>SPB, Russia</span>
              </div>
              <div className='flex gap-2 items-center'>
                <BookOpen />
                <span className=' text-xl font-semibold'>ITMO student</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Mail />
                <span className=' text-xl font-semibold'>contact@mitra.dev</span>
              </div>
              <div className='flex gap-2 items-center'>
                <CalendarDays />
                <span className=' text-xl font-semibold'>Available for projects</span>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='uppercase font-extrabold text-lg h-16 flex items-center px-10 bg-sky-400   border-4 border-black hover:-translate-y-2  duration-150'>About me</div>
              <p className='text-lg font-semibold'>Passionate fullstack developer with expertise in modern web technologies. I create clean, functional, and user-friendly interfaces that solve real problems.</p>
              <p className='text-lg font-semibold'>Always learning new technologies and staying up-to-date with the latest trends in web development and design.</p>
            </div>

            <div className='flex gap-2'>
              <Link href="https://leetcode.com/u/mitra-dev/"><BrutalIconButton variant='outline' className='p-2 size-20'><div className='relative w-full h-full'><Image src={'/leetcode.svg'} fill alt="leetcode" /></div></BrutalIconButton></Link>
              <Link href="https://github.com/m1tra"><BrutalIconButton variant='outline' className='p-2 size-20'><div className='relative w-full h-full'><Image src={'/github.svg'} fill alt="github" /></div></BrutalIconButton></Link>
              <Link href="https://leetcode.com/u/mitra-dev/"><BrutalIconButton variant='outline' className='p-2 size-20'><div className='relative w-full h-full'><Image src={'/tg.svg'} fill alt="github" /></div></BrutalIconButton></Link>
            </div>
          </div>
          <div className="relative   col-span-2 xl:col-span-1 ">
            <h3 className='uppercase text-4xl font-bold'>My Stack</h3>
            <RoadMap/>
          </div>
        </div>
      </div>
    </section>
  )
}