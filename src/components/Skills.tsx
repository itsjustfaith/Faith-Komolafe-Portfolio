import { skills } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex scroll-mt-16 flex-col gap-9 border-b border-ink bg-paper-2 px-4 py-20 sm:px-10 lg:scroll-mt-0 lg:px-14 lg:py-24"
    >
      <Reveal>
        <SectionHeading num="02" title="Skills" />
      </Reveal>

      <dl className="flex flex-col">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.06}>
            <div className="group flex flex-wrap gap-x-8 gap-y-2 border-t border-ink py-5 transition-colors">
              <dt className="shrink-0 basis-[180px] pt-1 font-mono text-[13px] transition-colors group-hover:text-accent">
                {s.group}
              </dt>
              <dd className="min-w-0 grow-[999] basis-[360px] text-[clamp(18px,2vw,22px)] font-bold leading-snug">
                {s.items}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
