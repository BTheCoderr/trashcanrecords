import { ExternalIcon } from "./icons/PlatformIcons";

type MusicLinkCardProps = {
  name: string;
  href: string;
  description: string;
  highlight?: boolean;
};

export function MusicLinkCard({
  name,
  href,
  description,
  highlight = false,
}: MusicLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-between gap-4
        overflow-hidden rounded-xl border p-4
        transition-all duration-300 ease-out
        active:scale-[0.99]
        ${
          highlight
            ? "border-white/20 bg-gradient-to-br from-ash/90 to-smoke/90 shadow-glow-sm hover:border-white/30"
            : "border-white/[0.06] bg-smoke/40 hover:border-white/15 hover:bg-ash/60"
        }
      `}
    >
      <div className="absolute inset-0 bg-card-shine opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <p className="font-medium text-pearl transition-colors group-hover:text-white">
          {name}
        </p>
        <p className="mt-0.5 text-xs text-chrome/60">{description}</p>
      </div>
      <ExternalIcon className="relative shrink-0 text-chrome/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-chrome/70" />
    </a>
  );
}
