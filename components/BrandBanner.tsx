import Image from "next/image";
import { brandAssets } from "@/config/site";

export function BrandBanner() {
  return (
    <section
      className="relative px-4 py-12 md:py-16"
      aria-label="Trash Can Records"
    >
      <div className="mx-auto max-w-5xl">
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-void shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
          <div className="relative aspect-[21/9] min-h-[140px] w-full sm:min-h-[180px] md:min-h-[220px]">
            <Image
              src={brandAssets.logoBanner}
              alt="Trash Can Records — Independent Music Label & Creative Studio"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-void/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
