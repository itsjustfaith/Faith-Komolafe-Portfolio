// All page content lives here so it can be edited without touching components.

export const profile = {
  firstName: "Faith",
  lastName: "Komolafe",
  role: "Frontend Developer",
  location: "Kuwait",
  email: "fxithkomo@yahoo.com",
  github: "https://github.com/itsjustfaith",
  linkedin: "", // add your LinkedIn URL here
  roles: ["Frontend Developer", "React Engineer", "UI Builder", "Software Engineer"],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Résumé", href: "#resume" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Redux Toolkit",
  "TanStack Query",
  "Zod",
  "Figma",
  "English / Arabic",
];

export const about = {
  lead: "I’m a Software Developer who bridges the gap between code and strategy, building digital experiences a step at a time.",
  body: "I build production interfaces in Next.js, React and TypeScript. I love turning designs into real, working interfaces: taking a Figma file or product spec and shipping responsive, accessible screens that match it closely. My toolkit covers Tailwind CSS, Redux Toolkit and TanStack Query for state and data, REST API integration, and React Hook Form with Zod for forms and validation, with Git along the way. I am proactive and enjoy brainstorming with designers and developers to find simple solutions to complex problems.",
  facts: [
    { label: "Based in", value: "Kuwait" },
    { label: "Degree", value: "BSc Software Engineering" },
  ],
};

export const skills = [
  { group: "Frontend", items: "React · Next.js · TypeScript · JavaScript ES6+ · HTML5 · CSS3 · Tailwind CSS · Bootstrap" },
  { group: "State & Data", items: "Redux Toolkit · TanStack Query · REST APIs · React Hook Form · Zod" },
  { group: "Tools", items: "Git · GitHub · Node.js · Vite · Figma · Agile / Scrum" },
  { group: "Backend & Real-time", items: "Node.js · Express · MongoDB · Socket.IO" },
  { group: "AI tools", items: "Claude · Codex" },
  { group: "Other", items: "Python · OpenCV · SQLAlchemy · Tesseract.js · face-api.js" },
];

export const projects = [
  {
    name: "Gigs KW",
    repo: "Gigs-KW",
    desc: "A bilingual freelance marketplace for Kuwait connecting clients with talent across design, writing, marketing, tutoring and consulting, with full right-to-left Arabic support.",
    stack: "Next.js · TypeScript · Tailwind · RTL",
    image: "/projects/gigs-kw.png",
  },
  {
    name: "iTalk",
    repo: "iTalk",
    desc: "Real-time chat with authenticated users, live messaging, conversation management and image and video sharing.",
    stack: "React · Express · MongoDB · Socket.IO",
    image: "/projects/italk.png",
  },
];

export const resume = [
  { when: "Jul 2026 – Present", title: "Frontend Developer — SFx Money App, USA", desc: "Auth, KYC (document capture, OCR, face match), wallet, beneficiaries, transfers and notifications with React, TypeScript, Redux Toolkit." },
  { when: "Kuwait", title: "Frontend Development — KUWAITNET", desc: "Implemented UI/UX designs for client sites, managed changes with Git feature branches, and wrote docs that caught layout errors early." },
  { when: "Education", title: "BSc Software Engineering (Honors)", desc: "Eastern Mediterranean University · Best Project Award." },
];

// Add a credential link to `url` to make the row clickable.
export const certifications = [
  { title: "Claude Code 101", source: "Claude Academy, Anthropic", date: "Sep 2026", url: "" },
  { title: "Customer Experience (CX) for Business Success", source: "HP Foundation", date: "Mar 2026", url: "" },
  { title: "Project Management Fundamentals", source: "IBM", date: "Jan 2026", url: "" },
];
