import ButtonDemo from "@/components/components-page/_ui/button-demo";
import { NeoBrutalButton } from "@/components/ui/button";
import {Card} from "@/components/ui/card";



const CardMockData =   {
    color: "#a78bfa, #f472b6, #22d3ee",
    title: "Frontend Development",
    subtitle: "React, Next.js, Astro",
    description: "Building responsive, accessible, and high-performance user interfaces with modern frameworks and clean design principles.",
  }
  




  
export default function Home() {
  return (
    <main className="pt-30 px-30 font-mono min-h-screen ">
      <section className="space-y-10">
        <div className="space-y-10">
          <h1 className="text-6xl font-bold text-white">The Foundation for your Design System</h1>
          <p className="text-gray-500 text-3xl" >A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.</p>
        </div>
        <div className="grid md:grid-cols-3  gap-10">
          <Card
            className="w-full p-10 aspect-square space-y-10"
            variant={"orange"}
          > 
            <div className="space-y-5">
              <h2 className="text-5xl font-bold">Buttons</h2>
              <p className="text-gray-500 text-2xl">Interactive button components with variants</p>
            </div>
            <ButtonDemo/>
          </Card>
          <Card
            className="w-full aspect-square"
            variant={"green"}
          />
          <Card
            className="w-full aspect-square"
            variant={"pink"}
          />
          <Card
            className="w-full aspect-square"
            variant={"default"}
          />
          <Card
            className="w-full aspect-square"
            variant={"purple"}
          />
          <Card
            className="w-full aspect-square"
            variant={"red"}
          />
        </div>
      </section>
    </main>
  );
}
