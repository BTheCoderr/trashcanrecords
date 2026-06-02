/**
 * ═══════════════════════════════════════════════════════════════════
 *  TRASH CAN RECORDS — SITE CONFIG
 *  Edit this file to update links, text, prices, and featured content.
 * ═══════════════════════════════════════════════════════════════════
 */

import { isLinkVisible } from "@/lib/links";

export const brand = {
  artist: "BTheSound",
  label: "Trash Can Records",
  tagline: "Music for the ones who feel everything.",
  copyrightYear: new Date().getFullYear(),
} as const;

export const brandAssets = {
  logoHero: "/images/brand/logo-hero.png",
  logoBanner: "/images/brand/logo-banner.png",
  logoMonogram: "/images/brand/logo-monogram.png",
} as const;

/** Live platform URLs */
export const links = {
  spotify:
    "https://open.spotify.com/artist/6XNtKuqpczRdXkcE94qZ3s?si=U1js5QKWQKGwImXB9daWwg&nd=1&dlsi=03d049e93c6a46ef",
  appleMusic: "https://music.apple.com/us/artist/bthesound/1896675646",
  youtubeChannel: "https://www.youtube.com/@trashcanrecords514",
  instagram: "https://instagram.com/bthesound_",
  /** Set active: true + real URL when ready */
  tiktok: "",
  facebook: "",
  threads: "",
  x: "",
  allPlatforms: "",
  contactEmail: "contact@trashcanrecords.com",
  bookingEmail: "booking@trashcanrecords.com",
  soundcloud: "",
  audiomack: "",
  youtubeMusic: "",
} as const;

/**
 * YouTube visuals — short teaser vs full clay animation (add later).
 */
export const youtubeVideos = {
  channel: links.youtubeChannel,
  /** Active now: "I Don't Say Much" clay short / teaser */
  short: {
    active: true,
    id: "8ZvmMZhA0jA",
    url: "https://youtu.be/8ZvmMZhA0jA?si=IC3KGjyIWGEOCwqZ",
    embed: "https://www.youtube.com/embed/8ZvmMZhA0jA",
    title: "I Don't Say Much",
    description: "Clay animation teaser — watch on YouTube",
  },
  /** Full official clay visual — paste URL + set active: true when live */
  fullVisual: {
    active: false,
    id: "",
    url: "",
    embed: "",
    title: "I Don't Say Much",
    description: "Official clay animation visual",
  },
} as const;

/** Hero background video file (separate from YouTube) */
export const hero = {
  videoSrc: "/videos/latest-visual.mp4",
  videoEnabled: true,
  posterImage: brandAssets.logoBanner,
  fallbackImage: brandAssets.logoBanner,
  badge: "New Visual",
  autoplay: true,
  muted: true,
  loop: true,
} as const;

export const heroCTAs = {
  listenNow: links.spotify,
  shopMerch: "#merch",
} as const;

/** Latest drop — listening + watch links */
export const latestDrop = {
  title: "I Don't Say Much",
  subtitle: "Official Clay Animation Visual",
  badge: hero.badge,
  listen: {
    spotify: links.spotify,
    appleMusic: links.appleMusic,
  },
  watch: {
    /** Uses short teaser until fullVisual is active */
    youtube: youtubeVideos.short.active
      ? youtubeVideos.short.url
      : youtubeVideos.fullVisual.url || links.youtubeChannel,
    label: "Watch on YouTube",
  },
} as const;

export const featuredRelease = {
  title: latestDrop.title,
  subtitle: latestDrop.subtitle,
  coverImage: undefined as string | undefined,
  links: {
    youtube: latestDrop.watch.youtube,
    spotify: latestDrop.listen.spotify,
    appleMusic: latestDrop.listen.appleMusic,
  },
  buttonLabels: {
    youtube: "Watch on YouTube",
    spotify: "Listen on Spotify",
    appleMusic: "Apple Music",
  },
} as const;

/** All music platforms — set active: true and href when ready */
const musicLinksAll = [
  {
    id: "spotify",
    name: "Spotify",
    href: links.spotify,
    description: "Stream & follow",
    active: true,
  },
  {
    id: "apple",
    name: "Apple Music",
    href: links.appleMusic,
    description: "Stream & follow",
    active: true,
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    href: links.youtubeMusic,
    description: "Stream & follow",
    active: false,
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    href: links.soundcloud,
    description: "Tracks & exclusives",
    active: false,
  },
  {
    id: "audiomack",
    name: "Audiomack",
    href: links.audiomack,
    description: "Stream free",
    active: false,
  },
  {
    id: "all-platforms",
    name: "All Platforms",
    href: links.allPlatforms,
    description: "Everywhere you listen",
    highlight: true,
    active: false,
  },
] as const;

export const musicLinks = musicLinksAll.filter(isLinkVisible);

/** Visuals section cards */
const videoLinksAll = [
  {
    id: "latest-visual",
    title: "Latest Visual",
    description: "I Don't Say Much — clay animation teaser",
    href: youtubeVideos.short.url,
    embedUrl: youtubeVideos.short.embed,
    badge: "Teaser",
    buttonLabel: "Watch Clay Visual",
    active: youtubeVideos.short.active,
  },
  {
    id: "channel",
    title: "YouTube Channel",
    description: "Subscribe for visuals & drops",
    href: youtubeVideos.channel,
    buttonLabel: "Watch on YouTube",
    active: true,
  },
  /** Enable when you have a separate Shorts playlist or visual — not the same as latest-visual */
  {
    id: "shorts",
    title: "Shorts & Visualizers",
    description: "Quick hits & loops",
    href: `${youtubeVideos.channel}/shorts`,
    buttonLabel: "Watch on YouTube",
    active: false,
  },
] as const;

export const videoLinks = videoLinksAll.filter((v) =>
  isLinkVisible({ active: v.active, href: v.href })
);

const socialLinksAll = [
  { id: "instagram", name: "Instagram", href: links.instagram, active: true },
  { id: "youtube", name: "YouTube", href: links.youtubeChannel, active: true },
  { id: "tiktok", name: "TikTok", href: links.tiktok, active: false },
  { id: "facebook", name: "Facebook", href: links.facebook, active: false },
  { id: "threads", name: "Threads", href: links.threads, active: false },
  { id: "x", name: "X", href: links.x, active: false },
] as const;

export const socialLinks = socialLinksAll.filter(isLinkVisible);

export const merchItems = [
  {
    id: "tee-black",
    title: "Trash Can Records Black Tee",
    price: "$35",
    image: "/images/merch/tee-black.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
  },
  {
    id: "tee-white",
    title: "Trash Can Records White Tee",
    price: "$35",
    image: "/images/merch/tee-white.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
  },
] as const;

export const footerLinks = [
  { label: "Contact", href: `mailto:${links.contactEmail}` },
  { label: "Booking", href: `mailto:${links.bookingEmail}` },
  { label: "Merch", href: "#merch" },
  { label: "Music", href: "#music" },
] as const;

export const emailSignup = {
  heading: "Join the Trash Can Records list",
  subheading: "First access to drops, visuals, and tour dates.",
  placeholder: "you@email.com",
  successMessage: "You're on the list. We'll be in touch.",
} as const;
