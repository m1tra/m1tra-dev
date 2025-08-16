import ProjectData from "@/components/projects/_ui/project-data"
import Info from "@/components/projects/info"
import ProjectsList from "@/components/projects/projects-list"

export default function Project() {
  return (
    <main className="mt-20 px-10 font-mono ">
      <div className="w-full flex  gap-5 min-h-[calc(100vh-100px)]">
        <aside className=" flex flex-col space-y-5 w-96 sticky top-20 h-[calc(100vh-100px)]">
          <Info />
          <div className="border flex-1 flex items-center justify-center">
            <ProjectData />
          </div>
        </aside>

        <div className="flex-1">
          <ProjectsList />
        </div>
      </div>
    </main>
  )
}

