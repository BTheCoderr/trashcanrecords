import { latestDrop } from "@/config/site";
import { LinkButton } from "./LinkButton";
import {
  AppleMusicIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";

/** Latest drop — listen on Spotify/Apple, watch clay visual on YouTube */
export function LatestVisual() {
  return (
    <section
      id="latest-drop"
      className="relative px-4 py-12 md:py-16"
      aria-labelledby="latest-drop-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 text-center">
          <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            Latest Drop
          </p>
          <h2
            id="latest-drop-heading"
            className="font-display text-xl font-medium tracking-wide text-pearl md:text-2xl"
          >
            {latestDrop.title}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-chrome/70">
            {latestDrop.subtitle}
          </p>
          <a
            href="#hub"
            className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-chrome/50 transition-colors hover:text-pearl"
          >
            ↑ Back to hero
          </a>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <LinkButton
            href={latestDrop.watch.youtube}
            variant="primary"
            size="md"
            icon={<YouTubeIcon className="h-4 w-4 text-void" />}
          >
            {latestDrop.watch.label}
          </LinkButton>
          <LinkButton
            href={latestDrop.listen.spotify}
            variant="secondary"
            size="md"
            icon={<SpotifyIcon className="h-4 w-4" />}
          >
            Listen on Spotify
          </LinkButton>
          <LinkButton
            href={latestDrop.listen.appleMusic}
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
