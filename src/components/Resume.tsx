import { certifications, resume } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const row = "group flex flex-wrap gap-x-8 gap-y-2 border-t border-[#3A404C] py-6";
const label = "shrink-0 basis-[180px] pt-1.5 font-mono text-[13px] text-accent-soft";
const title =
  "text-[clamp(20px,2.2vw,24px)] font-extrabold transition-transform duration-300 group-hover:translate-x-1";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex scroll-mt-16 flex-col gap-9 bg-ink px-4 py-20 text-paper sm:px-10 lg:scroll-mt-0 lg:px-14 lg:py-24"
    >
      <Reveal>
        <SectionHeading num="03" title="Résumé" tone="dark" />
      </Reveal>

      <ol className="flex flex-col">
        {resume.map((r, i) => (
          <li key={r.title}>
            <Reveal delay={i * 0.08}>
              <div className={row}>
                <span className={label}>{r.when}</span>
                <div className="flex min-w-0 grow-[999] basis-[360px] flex-col gap-2">
                  <h3 className={title}>{r.title}</h3>
                  <p className="text-base leading-relaxed text-[#C2BEB6]">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div>
        <Reveal>
          <h3 className="mb-2 font-mono text-[13px] uppercase tracking-[0.08em] text-accent-soft">
            Certifications
          </h3>
        </Reveal>
        <ul className="flex flex-col">
          {certifications.map((c, i) => {
            const body = (
              <div className={row}>
                <span className={label}>{c.date}</span>
                <div className="flex min-w-0 grow-[999] basis-[360px] flex-col gap-1">
                  <h4 className={title}>
                    {c.title}
                    {c.url && <span aria-hidden="true"> ↗</span>}
                  </h4>
                  <p className="text-base text-[#C2BEB6]">{c.source}</p>
                </div>
              </div>
            );
            return (
              <li key={c.title}>
                <Reveal delay={i * 0.08}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="block hover:text-paper">
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
