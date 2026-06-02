import Image from "next/image";
import { brand, brandAssets, heroCTAs } from "@/config/site";
import { LinkButton } from "./LinkButton";
import { MusicNoteIcon } from "./icons/PlatformIcons";

export function Hero() {
  return (
    <section
      id="hub"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-20 text-center scroll-mt-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[100px]" />
      <div className="noise-overlay absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-xl animate-fade-in">
        {/* Label logo */}
        <div className="mb-6 flex flex-col items-center gap-4 animate-slide-up">
          <div className="relative h-28 w-full max-w-[280px] sm:h-32 sm:max-w-[320px]">
            <Image
              src={brandAssets.logoHero}
              alt={brand.label}
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              sizes="320px"
              priority
            />
          </div>
        </div>

        {/* Artist name */}
        <h1
          className="
            font-display text-4xl font-medium tracking-[0.12em] sm:text-5xl md:text-6xl
            chrome-gradient-text animate-slide-up animate-delay-100
          "
        >
          {brand.artist}
        </h1>

        <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-chrome/75 animate-slide-up animate-delay-200 sm:max-w-md sm:text-base">
          {brand.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-slide-up animate-delay-300">
          <LinkButton
            href={heroCTAs.listenNow}
            variant="primary"
            size="lg"
            icon={<MusicNoteIcon className="h-5 w-5 text-void" />}
          >
            Listen Now
          </LinkButton>
          <LinkButton
            href={heroCTAs.shopMerch}
            variant="secondary"
            size="lg"
            external={false}
          >
            Shop Merch
          </LinkButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-shimmer">
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-chrome/40 to-transparent" />
      </div>
    </section>
  );
}
