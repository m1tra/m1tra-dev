'use client'

import React, { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "../ui/shadcn/drawer";
import Link from "next/link";
import BrutalButton from "../ui/brutal-ui/button";
import Button from "../ui/brutal-ui/button";
import Image from "next/image";


const items = [
  { title: "home", href: "/" },
  { title: "layouts", href: "/stack" },
  { title: "projects", href: "/projects" },
];

export default function MobileNavBar() {
  return (
    <nav className="fixed right-5 bottom-5 z-50">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-none border-5 border-black  hover:text-white transition-none shadow-[12px_12px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2 font-black text-2xl transition-all divide-neutral-200"
          >
            <div className="flex flex-col items-center gap-1">
              <Image src={'arrow.svg'} width={100} height={100} alt="arrow" className={`text-white ${""}`}/>
            </div>
            <span className="sr-only">Open navigation menu</span>
          </Button></DrawerTrigger>
        <DrawerContent className="rounded-none border-4 border-black h-3/4 flex flex-col justify-between  ">

          <DrawerHeader>
            <DrawerTitle>
              
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex flex-col gap-5 px-5 flex-1 justify-center">
            {items.map((item, index) => (
              <DrawerClose key={index} asChild>
                <Link
                  href={item.href}
                  className=""
                >
                    <BrutalButton className="text-6xl uppercase h-auto px-5 font-black w-full bg-violet-400 hover:bg-white hover:text-black">{item.title}</BrutalButton>
                </Link>
              </DrawerClose>
            ))}
          </div>

          <DrawerFooter className="w-full px-5 py-4">
            {/* Можно добавить кнопку выхода или что-то ещё */}
            <DrawerClose asChild>
              <BrutalButton className="text-6xl uppercase h-auto px-5 font-black w-full  hover:bg-white hover:text-black" variant="default">
                Close
              </BrutalButton>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
