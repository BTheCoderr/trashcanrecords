"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { brandAssets, openingIntro } from "@/config/site";

export function OpeningIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(openingIntro.muted);
  const showVideo = openingIntro.videoEnabled && openingIntro.videoSrc;

  const enterHub = useCallback(() => {
    document.body.style.overflow = "";
    const target = document.querySelector(openingIntro.scrollTarget);
    target?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!openingIntro.enabled) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !openingIntro.autoplay) return;
    video.play().catch(() => {
      /* autoplay blocked — user can tap play */
    });
  }, [showVideo]);

  if (!openingIntro.enabled) return null;

  return (
    <section
      id="latest-visual"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-void"
      aria-label="Trash Can Records — Latest Visual"
    >
      {/* Video / fallback */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-center"
            autoPlay={openingIntro.autoplay}
            muted={isMuted}
            loop={openingIntro.loop}
            playsInline
            preload="auto"
            poster={brandAssets.logoHero}
          >
            <source src={openingIntro.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-void">
            <div className="relative h-48 w-full max-w-md px-8 sm:h-56">
              <Image
                src={brandAssets.logoHero}
                alt="Trash Can Records"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Cinematic overlays */}
      <div className="noise-overlay absolute inset-0 z-[1] opacity-25" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-void via-transparent to-void/40" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/60 via-transparent to-transparent" />

      {/* Badge */}
      {openingIntro.badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-void/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-pearl backdrop-blur-md sm:left-6 sm:top-6">
          {openingIntro.badge}
        </span>
      )}

      {/* Sound toggle */}
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
          className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-void/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-chrome backdrop-blur-md transition-colors hover:border-white/25 hover:text-pearl sm:right-6 sm:top-6"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "Sound Off" : "Sound On"}
        </button>
      )}

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-5 px-6 pb-10 pt-24 sm:pb-12">
        <div className="text-center">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
            {openingIntro.subtitle}
          </p>
          <h1 className="mt-2 font-display text-lg tracking-wide text-pearl/90 sm:text-xl">
            {openingIntro.title}
          </h1>
        </div>

        <button
          type="button"
          onClick={enterHub}
          className="
            group rounded-full border border-white/20 bg-pearl/95 px-10 py-3.5
            text-sm font-semibold tracking-wide text-void
            shadow-glow-sm transition-all duration-300
            hover:border-white/40 hover:bg-white hover:shadow-glow
            active:scale-[0.98]
          "
        >
          {openingIntro.enterLabel}
        </button>

        <button
          type="button"
          onClick={enterHub}
          className="flex flex-col items-center gap-2 text-chrome/40 transition-colors hover:text-chrome/70"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-chrome/50 to-transparent animate-shimmer" />
        </button>
      </div>
    </section>
  );
}
