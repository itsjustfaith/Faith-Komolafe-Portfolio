export default function SectionHeading({
  num,
  title,
  tone = "light",
}: {
  num: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <span className={`font-mono text-[13px] ${tone === "dark" ? "text-accent-soft" : "text-accent"}`}>
        {num}
      </span>
      <h2 className="mt-2 text-[clamp(40px,5vw,52px)] font-black leading-none tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  );
}
