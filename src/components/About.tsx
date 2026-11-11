import { about, profile } from "@/data/site";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";
import ToolLogos from "./ToolLogos";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="flex scroll-mt-16 flex-wrap gap-12 border-b border-ink px-4 py-20 sm:px-10 lg:scroll-mt-0 lg:px-14 lg:py-24"
    >
      <Reveal className="basis-[220px] grow">
        <SectionHeading num="01" title="About" />
      </Reveal>

      <div className="flex min-w-0 grow-[999] basis-[460px] flex-col gap-6">
        <Reveal>
          <p className="text-[clamp(19px,2vw,22px)] font-medium leading-normal">{about.lead}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-[17px] leading-[1.65] text-ink-2">{about.body}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <ToolLogos />
        </Reveal>

        <Reveal delay={0.16}>
          <dl className="flex flex-wrap border-t border-rule">
            {about.facts.map((f) => (
              <div key={f.label} className="grow basis-[200px] border-b border-rule py-4">
                <dt className="font-mono text-xs uppercase text-muted">{f.label}</dt>
                <dd className="font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.24} className="flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 border-2 border-ink px-6 font-bold transition-colors hover:bg-ink hover:text-paper"
          >
            <SiGithub aria-hidden="true" className="size-5" />
            GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
