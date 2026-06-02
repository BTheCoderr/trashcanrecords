import {
  FacebookIcon,
  InstagramIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";

type SocialLink = {
  id: string;
  name: string;
  href: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
  threads: ThreadsIcon,
  x: XIcon,
};

type SocialLinksProps = {
  links: readonly SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.id];
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="
              group flex h-12 w-12 items-center justify-center
              rounded-full border border-white/10 bg-smoke/60
              text-chrome transition-all duration-300
              hover:border-white/25 hover:bg-ash hover:text-pearl hover:shadow-glow-sm
              active:scale-95
            "
          >
            {Icon ? (
              <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <span className="text-xs font-medium">{link.name[0]}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
