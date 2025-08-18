import BrutalButton from "@/components/ui/brutal-ui/button";
import NavBar from "@/components/components-page/navbar";
import { cn } from "@/components/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-30 py-20">
        <div className="flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-8 text-center max-w-6xl">
              <div className="font-bold px-3 py-2 bg-black text-white -rotate-1 inline-block text-xs sm:text-sm hover:translate-x-2 transition-transform duration-150">
                NEW BRUTAL COMPONENT →
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                THE FOUNDATION FOR YOUR{" "}
                <span className="bg-yellow-400 px-2 inline-block rotate-1">
                  DESIGN SYSTEM
                </span>
              </h1>
              <p className="text-black text-lg sm:text-xl font-bold leading-snug max-w-4xl">
                A set of BRUTALLY designed components that you can customize,
                extend, and build on. Start here then make it your own. OPEN SOURCE.
                OPEN CODE.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <BrutalButton className="uppercase py-4 px-8" variant="default">
                  Get Started
                </BrutalButton>
                <BrutalButton
                  variant="outline"
                  className={cn("px-8 py-4 uppercase")}
                >
                  View components
                </BrutalButton>
              </div>
            </div>   
            <div className="w-full flex flex-col gap-10">
                <NavBar />         
                {children}
            </div>
        </div>
    </main>
  );
}