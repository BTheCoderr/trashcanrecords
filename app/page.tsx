import { Hero } from "@/components/Hero";
import { LatestDropSection } from "@/components/LatestDropSection";
import { MusicLinkCard } from "@/components/MusicLinkCard";
import { VideoCard } from "@/components/VideoCard";
import { MerchCard } from "@/components/MerchCard";
import { SocialLinks } from "@/components/SocialLinks";
import { EmailSignup } from "@/components/EmailSignup";
import { ContactBooking } from "@/components/ContactBooking";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { SectionHeader } from "@/components/SectionHeader";
import {
  brand,
  emailSignup,
  musicLinks,
  videoLinks,
  merchItems,
  socialLinks,
} from "@/config/site";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden pb-24 md:pb-0">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(30,30,30,0.5),transparent_50%)]" />

        <Hero />
        <LatestDropSection />

        <section id="music" className="section-space scroll-mt-4">
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

        {videoLinks.length > 0 && (
          <section id="videos" className="section-space scroll-mt-4">
            <div className="mx-auto max-w-4xl">
              <SectionHeader
                eyebrow="More to watch"
                title="Visuals"
                subtitle="Subscribe for more from Trash Can Records."
              />
              <div className="grid gap-5 sm:grid-cols-2">
                {videoLinks.map((video) => (
                  <VideoCard
                    key={video.id}
                    title={video.title}
                    description={video.description}
                    href={video.href}
                    buttonLabel={video.buttonLabel}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="merch" className="section-space scroll-mt-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Wear the label"
              title="Merch"
              subtitle="Trash Can Records tees — dropping soon."
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {merchItems
                .filter((item) => item.active)
                .map((item) => (
                  <MerchCard
                    key={item.id}
                    title={item.title}
                    titleFull={"titleFull" in item ? item.titleFull : undefined}
                    price={item.price}
                    image={item.image}
                    shopUrl={item.shopUrl}
                    available={item.available}
                    notifyLabel={
                      "notifyLabel" in item ? item.notifyLabel : "Notify Me"
                    }
                  />
                ))}
            </div>
          </div>
        </section>

        <section id="social" className="section-space scroll-mt-4">
          <div className="mx-auto max-w-lg">
            <SectionHeader
              eyebrow="Connect"
              title="Follow"
              subtitle={`Stay close to ${brand.artist} and ${brand.label}.`}
            />
            <SocialLinks links={socialLinks} />
          </div>
        </section>

        {emailSignup.active && (
          <section id="join" className="section-space scroll-mt-4">
            <div className="mx-auto max-w-xl">
              <EmailSignup />
            </div>
          </section>
        )}

        <ContactBooking />
        <Footer />
      </main>

      <MobileStickyBar />
    </>
  );
}
