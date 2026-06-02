import { LinkButton } from "./LinkButton";

type VideoCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  embedUrl?: string;
  buttonLabel?: string;
};

export function VideoCard({
  title,
  description,
  href,
  badge,
  embedUrl,
  buttonLabel = "Watch on YouTube",
}: VideoCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-smoke/40 transition-all duration-300 hover:border-white/15 hover:shadow-glow-sm">
      <div className="relative aspect-video w-full overflow-hidden bg-void">
        {embedUrl ? (
          <iframe
            src={`${embedUrl}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ash via-smoke to-void">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
          </div>
        )}
        {badge && (
          <span className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-void/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-pearl backdrop-blur-sm">
            {badge}
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-transparent" />
      </div>
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
