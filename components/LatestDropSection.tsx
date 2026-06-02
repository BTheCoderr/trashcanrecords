import { latestDrop } from "@/config/site";
import { LinkButton } from "./LinkButton";
import {
  AppleMusicIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "./icons/PlatformIcons";
import { PlayIcon } from "./icons/PlatformIcons";

/** One premium block: visual + stream — no duplicate Featured Release */
export function LatestDropSection() {
  return (
    <section
      id="latest-drop"
      className="section-space scroll-mt-4"
      aria-labelledby="latest-drop-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center md:mb-10">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            New music
          </p>
          <h2
            id="latest-drop-heading"
            className="font-display text-2xl font-medium tracking-wide text-pearl md:text-3xl"
          >
            Latest Drop
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-chrome/70">
            Watch the clay visual, then stream on your platform.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </header>

        <article className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-smoke/95 via-ash/90 to-void shadow-[0_0_80px_rgba(255,255,255,0.05)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" />

          {/* Large visual — YouTube-first */}
          <a
            href={latestDrop.watch.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={latestDrop.thumbnail}
              alt={`${latestDrop.title} — clay animation visual`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-void/55 shadow-glow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <PlayIcon className="ml-1 h-8 w-8 text-pearl sm:h-10 sm:w-10" />
              </span>
            </div>
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-void/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-pearl backdrop-blur-md">
              Clay Visual
            </span>
          </a>

          <div className="relative p-6 sm:p-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
              {latestDrop.badge}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-wide text-pearl sm:text-3xl md:text-4xl">
              {latestDrop.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-chrome/75 sm:text-base">
              {latestDrop.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href={latestDrop.watch.youtube}
                variant="primary"
                size="md"
                icon={<YouTubeIcon className="h-4 w-4 text-void" />}
                className="w-full justify-center sm:w-auto"
              >
                {latestDrop.watch.label}
              </LinkButton>
              <LinkButton
                href={latestDrop.listen.spotify}
                variant="secondary"
                size="md"
                icon={<SpotifyIcon className="h-4 w-4" />}
                className="w-full justify-center sm:w-auto"
              >
                {latestDrop.listen.spotifyLabel}
              </LinkButton>
              <LinkButton
                href={latestDrop.listen.appleMusic}
                variant="outline"
                size="md"
                icon={<AppleMusicIcon className="h-4 w-4" />}
                className="w-full justify-center sm:w-auto"
              >
                {latestDrop.listen.appleLabel}
              </LinkButton>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
