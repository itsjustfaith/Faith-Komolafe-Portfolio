"use client";

import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiClaude,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const tools: { name: string; Icon: IconType }[] = [
  // Frontend
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  // Backend
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Socket.IO", Icon: SiSocketdotio },
  // AI
  { name: "Claude", Icon: SiClaude },
  { name: "Codex", Icon: SiOpenai },
];

export default function ToolLogos() {
  const reduce = useReducedMotion();
  return (
    <div>
      <ul aria-label="Tools I use" className="flex flex-wrap gap-2">
        {tools.map(({ name, Icon }, i) => (
          <motion.li
            key={name}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03, ease: "easeOut" }}
            className="group relative"
          >
            <span
              title={name}
              className="flex size-12 items-center justify-center border border-rule bg-paper transition-colors group-hover:border-ink"
            >
              <Icon
                aria-hidden="true"
                className="size-[22px] text-burnt opacity-55 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="sr-only">{name}</span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-ink px-2 py-1 font-mono text-[11px] text-paper opacity-0 transition-opacity group-hover:opacity-100"
            >
              {name}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
