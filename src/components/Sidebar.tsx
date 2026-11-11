"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, profile } from "@/data/site";

function useActiveSection() {
  const [active, setActive] = useState(nav[0].href);
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function NavLinks({ active, onPick }: { active: string; onPick?: () => void }) {
  return (
    <nav aria-label="Primary" className="flex flex-col">
      {nav.map((n, i) => {
        const isActive = active === n.href;
        return (
          <a
            key={n.href}
            href={n.href}
            onClick={onPick}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-baseline gap-3.5 border-b border-rule-soft py-2.5 text-[17px] font-semibold"
          >
            <span className="font-mono text-xs text-accent">0{i}</span>
            {n.label}
            {isActive && (
              <motion.span
                layoutId="nav-active"
                className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-col gap-2 text-sm font-semibold">
      <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      {profile.linkedin && (
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      )}
      <a href={`mailto:${profile.email}`}>Email ↗</a>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex flex-col gap-1.5">
      <a href="#home" className="text-[26px] font-black leading-none tracking-tight">
        {profile.firstName}
        <br />
        {profile.lastName}
        <span className="text-accent">.</span>
      </a>
      <span className="font-mono text-xs text-muted">
        {profile.role} · {profile.location}
      </span>
    </div>
  );
}

export default function Sidebar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: fixed side menu */}
      <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col justify-between border-r border-ink px-8 py-10 lg:flex">
        <div className="flex flex-col gap-10">
          <Brand />
          <NavLinks active={active} />
        </div>
        <SocialLinks />
      </aside>

      {/* Mobile and tablet: top bar with a slide-down menu */}
      <header className="sticky top-0 z-40 border-b border-ink bg-paper/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" className="text-xl font-black tracking-tight">
            FK<span className="text-accent">.</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex min-h-11 items-center gap-2 border border-ink px-4 font-mono text-[13px]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-6 px-4 pb-6">
                <NavLinks active={active} onPick={() => setOpen(false)} />
                <SocialLinks />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
