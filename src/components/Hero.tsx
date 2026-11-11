"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { marquee, profile } from "@/data/site";

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-30">
        <div className="fk-cool absolute -left-[8%] -top-[10%] h-[120%] w-[30%] bg-[#0E6FC4] blur-[70px]" />
        <div className="fk-cyan absolute -bottom-[10%] -left-[4%] h-[40%] w-[16%] bg-[#12C2E9] blur-[60px]" />
        <div className="fk-mist absolute left-[18%] top-0 h-full w-[14%] bg-[#9AA3AE] blur-[80px]" />
        <div className="fk-flare absolute right-[8%] top-[22%] h-[34%] w-[34%] rounded-full bg-[#FF3B1F] blur-[70px]" />
        <div className="fk-amber absolute -right-[8%] top-[36%] h-[70%] w-[26%] bg-[#FFC24D] blur-[70px]" />
        <div className="fk-ember absolute -right-[2%] -top-[6%] h-[16%] w-[22%] bg-[#FF1E1E] blur-[40px]" />
        <div
          className="fk-amber absolute right-0 top-[52%] h-[40%] w-[30%] bg-[#FF7A2E] blur-[80px]"
          style={{ animationDelay: "-7s" }}
        />
        <div className="fk-sweep absolute -top-[10%] left-0 h-[120%] w-[22%] bg-white opacity-70 blur-[50px]" />
        <div className="fk-orb absolute -left-[6%] top-[54%] size-[300px] rounded-full bg-white opacity-35" />
        <div className="fk-orb2 absolute left-[9%] top-[48%] size-[220px] rounded-full bg-white opacity-30" />
        <svg className="absolute inset-0 size-full opacity-35 mix-blend-multiply">
          <filter id="fk-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#fk-grain)" opacity="0.5" />
        </svg>
      </div>
      <div
        className="fk-grid absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#C9C3B8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

const TYPE_MS = 85;
const DELETE_MS = 45;
const HOLD_MS = 1600;
const GAP_MS = 350;

/** Types a role, holds, backspaces it, then types the next one. */
function useTypewriter(words: string[], enabled: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(enabled ? "" : words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[wordIndex];
    let delay: number;
    let next: () => void;

    if (!deleting && text === word) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = GAP_MS;
      next = () => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      };
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
      next = () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }

    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, deleting, wordIndex, words, enabled]);

  return { text, typing: text !== words[wordIndex] || deleting };
}

function RotatingRole() {
  const reduce = useReducedMotion();
  const { text, typing } = useTypewriter(profile.roles, !reduce);
  return (
    <p className="relative text-[clamp(24px,3vw,38px)] font-medium tracking-tight">
      I’m a{" "}
      <span aria-hidden="true" className="relative inline-flex items-baseline">
        <span className="whitespace-pre text-accent">{text || "​"}</span>
        <motion.span
          className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent"
          // Solid while typing or deleting, blinks while holding a word.
          animate={reduce || typing ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
          transition={typing ? { duration: 0 } : { duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        />
      </span>
      <span className="sr-only">{profile.roles.join(", ")}</span>
    </p>
  );
}

function Marquee() {
  const line = marquee.map((m) => m.toUpperCase()).join(" ✦ ") + " ✦";
  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-ink bg-ink py-3 text-paper">
      <div className="fk-marquee flex w-max gap-10 whitespace-nowrap font-mono text-[13px] tracking-[0.1em]">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-61px)] flex-col justify-center gap-7 overflow-hidden border-b border-ink px-4 pb-28 pt-16 sm:px-10 lg:min-h-screen lg:px-14"
    >
      <HeroBackground />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-[clamp(64px,10vw,156px)] font-black leading-[0.86] tracking-[-0.05em]"
      >
        {profile.firstName}
        <br />
        {profile.lastName}
        <span className="text-accent">.</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <RotatingRole />
      </motion.div>
      <Marquee />
    </section>
  );
}
