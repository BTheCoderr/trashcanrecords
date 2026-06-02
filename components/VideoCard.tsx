import { isExternalHref } from "@/lib/links";
import { LinkButton } from "./LinkButton";
import { PlayIcon } from "./icons/PlatformIcons";

type VideoCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  thumbnailUrl?: string;
  buttonLabel?: string;
};

export function VideoCard({
  title,
  description,
  href,
  badge,
  thumbnailUrl,
  buttonLabel = "Watch on YouTube",
}: VideoCardProps) {
  const external = isExternalHref(href);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/[0.1] bg-gradient-to-b from-smoke/80 to-void/90 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-white/18 hover:shadow-glow-sm">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="relative block aspect-video w-full overflow-hidden bg-void"
      >
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ash via-smoke to-void">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-void/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <PlayIcon className="ml-1 h-6 w-6 text-pearl" />
          </span>
        </div>
        {badge && (
          <span className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-void/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-pearl backdrop-blur-sm">
            {badge}
          </span>
        )}
      </a>
      <div className="p-5">
        <h3 className="font-display text-lg tracking-wide text-pearl">{title}</h3>
        <p className="mt-1 text-sm text-chrome/65">{description}</p>
        <div className="mt-4">
          <LinkButton href={href} variant="outline" size="sm">
            {buttonLabel}
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
