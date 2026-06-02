import { Hero } from "@/components/Hero";
import { LatestVisual } from "@/components/LatestVisual";
import { ReleaseCard } from "@/components/ReleaseCard";
import { MusicLinkCard } from "@/components/MusicLinkCard";
import { VideoCard } from "@/components/VideoCard";
import { MerchCard } from "@/components/MerchCard";
import { SocialLinks } from "@/components/SocialLinks";
import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import {
  brand,
  featuredRelease,
  musicLinks,
  videoLinks,
  merchItems,
  socialLinks,
} from "@/config/site";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(30,30,30,0.5),transparent_50%)]" />

      <Hero />
      <LatestVisual />

      <section className="relative px-4 py-12 md:py-16" aria-labelledby="featured-release">
        <div className="mx-auto max-w-3xl">
          <ReleaseCard
            title={featuredRelease.title}
            subtitle={featuredRelease.subtitle}
            coverImage={featuredRelease.coverImage}
            links={featuredRelease.links}
            buttonLabels={featuredRelease.buttonLabels}
          />
        </div>
      </section>

      <section id="music" className="relative px-4 py-16 md:py-20">
        <div className="mx-auto max-w-lg">
          <SectionHeader
            eyebrow="Stream"
            title="Music"
            subtitle="Every platform. One artist."
          />
          <div className="flex flex-col gap-3">
            {musicLinks.map((link) => (
              <MusicLinkCard
                key={link.id}
                name={link.name}
                href={link.href}
                description={link.description}
                highlight={"highlight" in link && link.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="relative px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="More to watch"
            title="Visuals"
            subtitle="Clay animation teaser and the full channel."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {videoLinks.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                href={video.href}
                badge={"badge" in video ? video.badge : undefined}
                embedUrl={"embedUrl" in video ? video.embedUrl : undefined}
                buttonLabel={"buttonLabel" in video ? video.buttonLabel : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="merch" className="relative px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Wear the label"
            title="Merch"
            subtitle="Trash Can Records tees — dropping soon."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {merchItems.map((item) => (
              <MerchCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                shopUrl={item.shopUrl}
                available={item.available}
                notifyLabel={"notifyLabel" in item ? item.notifyLabel : "Notify Me"}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="relative px-4 py-16 md:py-20">
        <div className="mx-auto max-w-lg">
          <SectionHeader
            eyebrow="Connect"
            title="Follow"
            subtitle={`Stay close to ${brand.artist} and ${brand.label}.`}
          />
          <SocialLinks links={socialLinks} />
        </div>
      </section>

      <section id="join" className="relative px-4 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <EmailSignup />
        </div>
      </section>

      <Footer />
    </main>
  );
}
