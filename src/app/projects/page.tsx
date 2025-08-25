
import ProjectsList from "@/components/projects/projects-list"

export default function Project() {
  return (
    <main className="mt-20 px-10  ">
      <section className="flex flex-col gap-5">
        <h1 className="text-6xl font-extrabold uppercase">My projects</h1>
        <span className="h-2 w-28 bg-black"></span>
        <div className="mt-10">
          <ProjectsList/>
        </div>
      </section>
    </main>
  )
}

