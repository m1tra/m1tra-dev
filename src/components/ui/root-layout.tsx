'use client'

import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import MobileNavBar from '../mobile-navbar.tsx/navbar'
import { motion, useScroll } from 'motion/react'

type RootProps = {
    children:React.ReactNode
}

export default function MainLayout({children}:RootProps) {

  
  return (
    <>
      <motion.div
      >
        <Header/>
      </motion.div>
      <Navbar>
        {children}
      </Navbar>
      <div className="md:hidden inline-block">
        <MobileNavBar/>
      </div>
    </>
  )
}