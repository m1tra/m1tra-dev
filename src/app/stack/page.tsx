import ProjectProgress from "@/components/ui/examples/project-progress";
import TeamChat from "@/components/ui/examples/team-chat";
import FormExample from "@/components/ui/examples/auth";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      <ProjectProgress />
      <TeamChat />
      <FormExample />
      <ProjectProgress />
      <TeamChat />
      <FormExample />
    </section>
  );
}
