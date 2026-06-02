import { LinkButton } from "./LinkButton";
import {
  AppleMusicIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";
import { PlayIcon } from "./icons/PlatformIcons";

type ReleaseCardProps = {
  title: string;
  subtitle: string;
  badge?: string;
  coverImage?: string;
  links: {
    youtube: string;
    spotify: string;
    appleMusic: string;
  };
  buttonLabels?: {
    youtube?: string;
    spotify?: string;
    appleMusic?: string;
  };
};

export function ReleaseCard({
  title,
  subtitle,
  badge = "Latest Drop",
  coverImage,
  links,
  buttonLabels,
}: ReleaseCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-smoke/90 via-ash/80 to-void shadow-[0_0_60px_rgba(255,255,255,0.04)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07)_0%,transparent_45%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative grid gap-0 md:grid-cols-[minmax(200px,280px)_1fr]">
        {/* Thumbnail */}
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-square overflow-hidden md:aspect-auto md:min-h-[280px]"
        >
          {coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt={`${title} visual thumbnail`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full min-h-[220px] w-full items-center justify-center bg-gradient-to-br from-ash via-smoke to-void">
              <PlayIcon className="h-12 w-12 text-pearl/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-void/60 backdrop-blur-md">
              <PlayIcon className="ml-1 h-7 w-7 text-pearl" />
            </span>
          </div>
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-void/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-pearl backdrop-blur-md">
            Visual
          </span>
        </a>

        <div className="flex flex-col justify-center p-6 text-center md:p-8 md:text-left">
          <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            {badge}
          </p>
          <h3 className="font-display text-2xl font-medium tracking-wide text-pearl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-chrome/75">{subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <LinkButton
              href={links.youtube}
              variant="primary"
              size="md"
              icon={<YouTubeIcon className="h-4 w-4 text-void" />}
            >
              {buttonLabels?.youtube ?? "Watch Visual"}
            </LinkButton>
            <LinkButton
              href={links.spotify}
              variant="secondary"
              size="md"
              icon={<SpotifyIcon className="h-4 w-4" />}
            >
              {buttonLabels?.spotify ?? "Spotify"}
            </LinkButton>
            <LinkButton
              href={links.appleMusic}
              variant="outline"
              size="md"
              icon={<AppleMusicIcon className="h-4 w-4" />}
            >
              {buttonLabels?.appleMusic ?? "Apple Music"}
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
