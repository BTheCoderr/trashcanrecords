type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, id }: SectionHeaderProps) {
  return (
    <header id={id} className="mb-10 text-center md:mb-12">
      {eyebrow && (
        <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-medium tracking-wide text-pearl md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-chrome/70">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-6" />
    </header>
  );
}
