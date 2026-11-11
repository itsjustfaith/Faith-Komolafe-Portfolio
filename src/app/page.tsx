import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
