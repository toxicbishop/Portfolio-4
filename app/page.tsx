import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { AiFocus } from "@/components/ai-focus";
import { Experience } from "@/components/experience";
import { Hackathons } from "@/components/hackathons";
import { GitHubActivity } from "@/components/github";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <AiFocus />
      <Experience />
      <Hackathons />
      <GitHubActivity />
      <Writing />
      <Contact />
    </>
  );
}
