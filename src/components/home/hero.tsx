import React from 'react'
import BrutalButton from '../ui/brutal-ui/button'
import { cn } from '../lib/utils'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-30 py-20">
        <h1 className='text-6xl font-bold font-mono'>Hey, i&apos;m m1tra</h1>
        <div className="flex flex-wrap justify-center gap-4">
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

    </section>
  )
}