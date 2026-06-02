import { latestVisual } from "@/config/site";
import { LinkButton } from "./LinkButton";
import {
  AppleMusicIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";

/** Stream / platform links for the latest drop — video plays in opening intro */
export function LatestVisual() {
  return (
    <section
      className="relative px-4 py-12 md:py-16"
      aria-labelledby="latest-visual-links"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 text-center">
          <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            Latest Drop
          </p>
          <h2
            id="latest-visual-links"
            className="font-display text-xl font-medium tracking-wide text-pearl md:text-2xl"
          >
            {latestVisual.title}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-chrome/70">
            {latestVisual.subtitle}
          </p>
          <a
            href="#latest-visual"
            className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-chrome/50 transition-colors hover:text-pearl"
          >
            ↑ Watch opening visual
          </a>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <LinkButton
            href={latestVisual.youtube}
            variant="primary"
            size="md"
            icon={<YouTubeIcon className="h-4 w-4 text-void" />}
          >
            YouTube Channel
          </LinkButton>
          <LinkButton
            href={latestVisual.spotify}
            variant="secondary"
            size="md"
            icon={<SpotifyIcon className="h-4 w-4" />}
          >
            Spotify
          </LinkButton>
          <LinkButton
            href={latestVisual.appleMusic}
            variant="outline"
            size="md"
            icon={<AppleMusicIcon className="h-4 w-4" />}
          >
            Apple Music
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
