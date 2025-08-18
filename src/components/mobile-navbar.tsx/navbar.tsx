import React from "react";
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


const items = [
  { title: "home", href: "/" },
  { title: "layouts", href: "/stack" },
  { title: "projects", href: "/projects" },
];

export default function MobileNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <Drawer>
        <DrawerTrigger className="w-full h-10 flex items-center justify-center bg-amber-400 border-4 border-black">
          <span className="h-1 w-20 bg-black"></span>
        </DrawerTrigger>

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
                    <BrutalButton className="text-7xl uppercase h-auto px-5 font-black w-full bg-violet-400 hover:bg-white hover:text-black">{item.title}</BrutalButton>
                </Link>
              </DrawerClose>
            ))}
          </div>

          <DrawerFooter className="w-full px-5 py-4">
            {/* Можно добавить кнопку выхода или что-то ещё */}
            <DrawerClose asChild>
              <BrutalButton className="text-7xl uppercase h-auto px-5 font-black w-full  hover:bg-white hover:text-black" variant="default">
                Close
              </BrutalButton>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
