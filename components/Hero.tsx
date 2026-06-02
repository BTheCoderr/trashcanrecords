"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { brand, hero, heroCTAs } from "@/config/site";
import { LinkButton } from "./LinkButton";
import { MusicNoteIcon, PlayIcon } from "./icons/PlatformIcons";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(hero.muted);
  const showVideo = hero.videoEnabled && hero.videoSrc;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hero.autoplay || !showVideo) return;
    video.play().catch(() => undefined);
  }, [showVideo]);

  return (
    <section
      id="hub"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-void"
      aria-label={`${brand.label} — ${brand.artist}`}
    >
      {/* Full-bleed video — minimal overlay so the visual stays visible */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full scale-[1.02] object-cover object-[center_40%] sm:object-[center_38%]"
            autoPlay={hero.autoplay}
            muted={isMuted}
            loop={hero.loop}
            playsInline
            preload="auto"
            poster={hero.posterImage}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-void px-4">
            <div className="relative aspect-[21/9] w-full max-w-6xl">
              <Image
                src={hero.fallbackImage}
                alt={brand.label}
                fill
                priority
                className="object-contain object-center"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>

      {/* Light edge vignette only — no center wash */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-[1] opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/25 via-transparent to-transparent" />
      <div className="hero-light-sweep pointer-events-none absolute inset-0 z-[2] opacity-60" />

      {hero.badge && (
        <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-void/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-pearl/90 backdrop-blur-sm sm:left-6 sm:top-6">
          {hero.badge}
        </span>
      )}

      {showVideo && (
        <button
          type="button"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            const next = !isMuted;
            video.muted = next;
            setIsMuted(next);
            if (!next) video.play().catch(() => undefined);
          }}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-void/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-chrome/90 backdrop-blur-sm transition-colors hover:border-white/25 hover:text-pearl sm:right-6 sm:top-6"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "Sound Off" : "Sound On"}
        </button>
      )}

      {/* Bottom strip: text + CTAs — video breathes above */}
      <div className="relative z-10 mt-auto w-full">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] min-h-[280px] bg-gradient-to-t from-void from-30% via-void/70 to-transparent sm:h-[38%]"
          aria-hidden
        />

        <div className="relative flex flex-col items-center px-5 pb-28 pt-16 text-center sm:px-6 sm:pb-32 sm:pt-20">
          <p className="hero-text-shadow mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-pearl/80">
            {brand.label}
          </p>

          <h1 className="hero-text-shadow font-display text-4xl font-medium tracking-[0.14em] chrome-gradient-text sm:text-5xl md:text-6xl">
            {brand.artist}
          </h1>

          <p className="hero-text-shadow mx-auto mt-3 max-w-sm text-sm leading-relaxed text-pearl/85 sm:max-w-md">
            {brand.tagline}
          </p>

          <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            {heroCTAs.watchVisual.active && (
              <LinkButton
                href={heroCTAs.watchVisual.href}
                variant="primary"
                size="lg"
                icon={<PlayIcon className="h-5 w-5 text-void" />}
                className="w-full justify-center sm:w-auto"
              >
                {heroCTAs.watchVisual.label}
              </LinkButton>
            )}
            {heroCTAs.listenNow.active && (
              <LinkButton
                href={heroCTAs.listenNow.href}
                variant="secondary"
                size="lg"
                icon={<MusicNoteIcon className="h-5 w-5" />}
                className="w-full justify-center sm:w-auto"
              >
                {heroCTAs.listenNow.label}
              </LinkButton>
            )}
          </div>

          {heroCTAs.shopMerch.active && (
            <LinkButton
              href={heroCTAs.shopMerch.href}
              variant="ghost"
              size="sm"
              external={false}
              className="hero-text-shadow mt-4 text-chrome/70"
            >
              {heroCTAs.shopMerch.label}
            </LinkButton>
          )}
        </div>
      </div>

      <a
        href="#latest-drop"
        className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-chrome/30 transition-colors hover:text-chrome/55 md:bottom-8"
        aria-label="Scroll to latest drop"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <div className="h-6 w-px bg-gradient-to-b from-chrome/40 to-transparent" />
      </a>
    </section>
  );
}
