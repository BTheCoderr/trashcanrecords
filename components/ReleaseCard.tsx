import { LinkButton } from "./LinkButton";
import {
  AppleMusicIcon,
  PlayIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";

type ReleaseCardProps = {
  title: string;
  subtitle: string;
  coverImage?: string;
  links: {
    youtube: string;
    spotify: string;
    appleMusic: string;
  };
};

export function ReleaseCard({ title, subtitle, coverImage, links }: ReleaseCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-smoke/50 shadow-card backdrop-blur-sm">
      <div className="absolute inset-0 bg-card-shine opacity-60" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid gap-6 p-6 md:grid-cols-[minmax(140px,200px)_1fr] md:gap-8 md:p-8">
        {/* Artwork */}
        <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border border-white/10 shadow-glow-sm md:mx-0 md:max-w-none">
          {coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt={`${title} cover art`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-ash via-smoke to-void">
              <div className="mb-2 h-16 w-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-pearl/40" />
              </div>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-chrome/40">
                Visual
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-chrome/50">
            Featured Release
          </p>
          <h3 className="font-display text-2xl font-medium tracking-wide text-pearl md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-chrome/70">{subtitle}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <LinkButton
              href={links.youtube}
              variant="primary"
              size="md"
              icon={<YouTubeIcon className="w-4 h-4 text-void" />}
            >
              Watch on YouTube
            </LinkButton>
            <LinkButton
              href={links.spotify}
              variant="secondary"
              size="md"
              icon={<SpotifyIcon className="w-4 h-4" />}
            >
              Listen on Spotify
            </LinkButton>
            <LinkButton
              href={links.appleMusic}
              variant="outline"
              size="md"
              icon={<AppleMusicIcon className="w-4 h-4" />}
            >
              Apple Music
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
