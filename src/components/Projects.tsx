/* eslint-disable @next/next/no-img-element -- static export, images are served as-is */
import { SiGithub } from "react-icons/si";
import { profile, projects } from "@/data/site";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-16 border-b border-ink px-4 py-20 sm:px-10 lg:scroll-mt-0 lg:px-14 lg:py-24"
    >
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading num="04" title="Projects" />
        <a href={profile.github} target="_blank" rel="noreferrer" className="font-bold">
          All repositories ↗
        </a>
      </Reveal>

      {projects.map((p) => {
        const url = `${profile.github}/${p.repo}`;
        return (
          <article
            key={p.repo}
            className="group flex flex-wrap items-center gap-8 border-t border-rule py-8"
          >
            <Reveal className="flex min-w-0 grow-[999] basis-[380px] flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-[clamp(26px,3vw,32px)] font-extrabold tracking-tight">{p.name}</h3>
                <span className="font-mono text-[13px] text-muted">{p.stack}</span>
              </div>
              <p className="text-base leading-relaxed text-ink-2">{p.desc}</p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 self-start font-bold"
              >
                <SiGithub aria-hidden="true" className="size-4" />
                View repository
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.1} className="min-w-0 grow basis-[300px]">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} repository`}
                className="block overflow-hidden border border-ink"
              >
                <img
                  src={asset(p.image)}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </a>
            </Reveal>
          </article>
        );
      })}
    </section>
  );
}
