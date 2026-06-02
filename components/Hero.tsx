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
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full scale-[1.02] object-cover object-center sm:object-[center_35%]"
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
          <div className="relative flex h-full w-full items-center justify-center bg-void px-4 pt-8 pb-32 sm:px-8">
            <div className="relative aspect-[21/9] w-full max-w-6xl sm:max-w-7xl">
              <Image
                src={hero.fallbackImage}
                alt={brand.label}
                fill
                priority
                className="object-contain object-center drop-shadow-[0_0_80px_rgba(255,255,255,0.12)]"
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1280px"
              />
            </div>
          </div>
        )}
      </div>

      <div className="noise-overlay absolute inset-0 z-[1] opacity-20" />
      <div className="hero-smoke-glow pointer-events-none absolute inset-0 z-[2]" />
      <div className="hero-light-sweep pointer-events-none absolute inset-0 z-[2]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_75%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/50 via-void/10 to-void" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] bg-gradient-to-t from-void via-void/85 to-transparent sm:h-[48%]" />

      {hero.badge && (
        <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-void/75 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-pearl backdrop-blur-md sm:left-6 sm:top-6">
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
          className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-void/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-chrome backdrop-blur-md transition-colors hover:border-white/25 hover:text-pearl sm:right-6 sm:top-6"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "Sound Off" : "Sound On"}
        </button>
      )}

      <div className="relative z-10 mt-auto flex w-full flex-col items-center px-4 pb-10 pt-[42vh] text-center sm:px-6 sm:pb-12 sm:pt-[48vh] md:pt-[50vh]">
        <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-chrome/55">
          {brand.label}
        </p>

        <h1 className="font-display text-4xl font-medium tracking-[0.14em] chrome-gradient-text sm:text-5xl md:text-6xl lg:text-7xl">
          {brand.artist}
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-chrome/80 sm:max-w-md sm:text-base">
          {brand.tagline}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
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
            className="mt-5"
          >
            {heroCTAs.shopMerch.label}
          </LinkButton>
        )}

        <a
          href="#latest-drop"
          className="mt-8 flex flex-col items-center gap-2 pb-2 text-chrome/35 transition-colors hover:text-chrome/60"
          aria-label="Scroll to latest drop"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <div className="h-8 w-px bg-gradient-to-b from-chrome/45 to-transparent animate-shimmer" />
        </a>
      </div>
    </section>
  );
}
