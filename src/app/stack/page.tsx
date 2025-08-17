

import  BrutalButton  from "@/components/ui/brutal-ui/button";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/components-page/navbar";
import Card from "@/components/ui/brutal-ui/card";
import ProjectProgress from "@/components/ui/examples/project-progress";
import { cn } from "@/components/lib/utils";


  
export default function Home() {
  return (
    <main className="py-20 px-30  min-h-screen ">
      <section className="gap-15 flex items-center flex-col ">
        <div className="gap-5 flex items-center flex-col">
          <div className="font-bold px-3 py-2 bg-black text-white -rotate-1 inline-block  text-sm hover:translate-x-2 duration-150">NEW BRUTAL COMPONENT →</div>
          <div className="space-y-10 text-center flex flex-col items-center max-w-6xl">
            <h1 className="text-6xl font-black mb-6 leading-none">
              THE FOUNDATION FOR YOUR{" "}
              <span className="bg-yellow-400 px-2  inline-block rotate-1">DESIGN SYSTEM</span>
            </h1>
            <p className="text-black text-xl font-bold max-w-5xl leading-tight " >A set of BRUTALLY designed components that you can customize, extend, and build on. Start here then make it your own. OPEN SOURCE. OPEN CODE.</p>
          </div>
          <div className="flex">
            <BrutalButton className={"uppercase py-5 px-10"} variant="default">Get Started</BrutalButton>
            <BrutalButton variant="outline" className={cn(" px-10 py-5  ")}>
              <span>View components</span>
              
            </BrutalButton>
          </div>
        </div>
        <div className="flex gap-5 flex-col w-full">
          <NavBar/>
          <div className="grid md:grid-cols-3  gap-10">
            <ProjectProgress/>
            <Card
              className="w-full p-10 bg-green-400 aspect-square space-y-5"
            > 
              <div>

              </div>
            </Card>
            <Card
              className="w-full p-10 bg-yellow-400 aspect-square space-y-5"
            > 
              <div>

              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
