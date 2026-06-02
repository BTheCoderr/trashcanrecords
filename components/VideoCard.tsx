import { LinkButton } from "./LinkButton";
import { PlayIcon } from "./icons/PlatformIcons";

type VideoCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  internal?: boolean;
};

export function VideoCard({ title, description, href, badge, internal }: VideoCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-smoke/40 transition-all duration-300 hover:border-white/15 hover:shadow-glow-sm">
      <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-ash via-smoke to-void">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/10">
          <PlayIcon className="ml-1 w-6 h-6 text-pearl" />
        </div>
        {badge && (
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-void/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-pearl backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg tracking-wide text-pearl">{title}</h3>
        <p className="mt-1 text-sm text-chrome/65">{description}</p>
        <div className="mt-4">
          <LinkButton href={href} variant="outline" size="sm" external={!internal}>
            {internal ? "Play Visual" : "Watch"}
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
