import { SiGithub } from "react-icons/si";
import { profile } from "@/data/site";
import Reveal from "./Reveal";

const linkClass =
  "inline-flex min-h-12 items-center gap-2.5 border-2 border-ink px-6 text-lg font-semibold transition-colors hover:bg-ink hover:text-paper";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="flex scroll-mt-16 flex-col gap-8 px-4 pb-12 pt-20 sm:px-10 lg:scroll-mt-0 lg:px-14 lg:pt-24"
    >
      <Reveal>
        <span className="font-mono text-[13px] text-accent">05</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(48px,7vw,104px)] font-black leading-[0.95] tracking-[-0.04em]">
          Let’s build
          <br />
          something<span className="text-burnt">.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-[520px] text-lg leading-relaxed text-ink-2">
          Open to frontend roles and freelance projects. Send me a message and I’ll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={`${linkClass} border-burnt bg-burnt text-white hover:border-ink`}>
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
          <SiGithub aria-hidden="true" className="size-5" />
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
        )}
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</p>
        <a href="#home" className="inline-flex min-h-11 items-center">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
