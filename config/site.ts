/**
 * ═══════════════════════════════════════════════════════════════════
 *  TRASH CAN RECORDS — SITE CONFIG
 *  Edit this file to update links, text, prices, and featured content.
 * ═══════════════════════════════════════════════════════════════════
 */

export const brand = {
  artist: "BTheSound",
  label: "Trash Can Records",
  tagline: "Music for the ones who feel everything.",
  copyrightYear: new Date().getFullYear(),
} as const;

/** Brand images — files live in /public/images/brand/ */
export const brandAssets = {
  /** Black/chrome oval logo — hero */
  logoHero: "/images/brand/logo-hero.png",
  /** Wide cinematic banner — mid-page */
  logoBanner: "/images/brand/logo-banner.png",
  /** TCR monogram — optional favicon / small marks */
  logoMonogram: "/images/brand/logo-monogram.png",
} as const;

/**
 * Central links — update here first, then arrays below inherit where noted.
 */
export const links = {
  spotify:
    "https://open.spotify.com/artist/6XNtKuqpczRdXkcE94qZ3s?si=U1js5QKWQKGwImXB9daWwg&nd=1&dlsi=03d049e93c6a46ef",
  appleMusic: "https://music.apple.com/us/artist/bthesound/1896675646",
  youtube: "https://www.youtube.com/@trashcanrecords514",
  instagram: "https://instagram.com/bthesound_",
  /** Placeholder — replace when live */
  tiktok: "https://www.tiktok.com/@bthesound_",
  /** Placeholder — replace when live */
  facebook: "https://facebook.com/YOUR_PAGE",
  /** Placeholder — replace when live */
  threads: "https://threads.net/@bthesound_",
  /** Placeholder — replace when live */
  x: "https://x.com/bthesound_",
  /** DistroKid / Linktree / Tone.is smart link — replace when live */
  allPlatforms: "https://linktr.ee/YOUR_SMART_LINK",
  /** Placeholder emails — replace with real inboxes */
  contactEmail: "contact@trashcanrecords.com",
  bookingEmail: "booking@trashcanrecords.com",
  /** Optional placeholders */
  soundcloud: "https://soundcloud.com/YOUR_USERNAME",
  audiomack: "https://audiomack.com/YOUR_USERNAME",
  youtubeMusic: "https://music.youtube.com/channel/YOUR_CHANNEL_ID",
} as const;

/** Hero & primary CTAs */
export const heroCTAs = {
  listenNow: links.spotify,
  shopMerch: "#merch",
} as const;

/**
 * Latest visual — drop your MP4 in /public/videos/ and set `src` below.
 * Set `enabled: false` to show a styled placeholder until the file is ready.
 */
export const latestVisual = {
  title: "I Don't Say Much",
  subtitle: "Official Clay Animation Visual",
  badge: "New Visual",
  /** Path relative to /public — e.g. "/videos/latest-visual.mp4" */
  videoSrc: "/videos/latest-visual.mp4",
  /** Set true once the video file exists in /public/videos/ */
  videoEnabled: true,
  posterImage: "", // optional: "/images/releases/i-dont-say-much-poster.jpg"
  youtube: links.youtube,
  spotify: links.spotify,
  appleMusic: links.appleMusic,
} as const;

/**
 * Full-screen opening cinematic — first thing visitors see.
 * Uses the same video as latestVisual by default.
 */
export const openingIntro = {
  enabled: true,
  videoSrc: latestVisual.videoSrc,
  videoEnabled: latestVisual.videoEnabled,
  badge: latestVisual.badge,
  title: latestVisual.title,
  subtitle: latestVisual.subtitle,
  /** Autoplay requires muted on most browsers */
  autoplay: true,
  muted: true,
  loop: true,
  enterLabel: "Explore",
  /** Where the Enter button scrolls — main hub anchor */
  scrollTarget: "#hub",
} as const;

/** Featured release — mirrors latest drop */
export const featuredRelease = {
  title: latestVisual.title,
  subtitle: latestVisual.subtitle,
  coverImage: latestVisual.posterImage ? latestVisual.posterImage : undefined,
  links: {
    youtube: links.youtube,
    spotify: links.spotify,
    appleMusic: links.appleMusic,
  },
} as const;

/** Streaming platforms */
export const musicLinks = [
  {
    id: "spotify",
    name: "Spotify",
    href: links.spotify,
    description: "Stream & follow",
  },
  {
    id: "apple",
    name: "Apple Music",
    href: links.appleMusic,
    description: "Stream & follow",
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    href: links.youtubeMusic,
    description: "Stream & follow",
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    href: links.soundcloud,
    description: "Tracks & exclusives",
  },
  {
    id: "audiomack",
    name: "Audiomack",
    href: links.audiomack,
    description: "Stream free",
  },
  {
    id: "all-platforms",
    name: "All Platforms",
    href: links.allPlatforms,
    description: "Everywhere you listen",
    highlight: true,
  },
] as const;

/** YouTube / video cards */
export const videoLinks = [
  {
    id: "latest-visual",
    title: "Latest Visual",
    description: "I Don't Say Much — Clay Animation",
    href: "#latest-visual",
    badge: "New",
    internal: true,
  },
  {
    id: "channel",
    title: "YouTube Channel",
    description: "Subscribe for visuals & drops",
    href: links.youtube,
  },
  {
    id: "shorts",
    title: "Shorts & Visualizers",
    description: "Quick hits & loops",
    href: `${links.youtube}/shorts`,
  },
] as const;

/** Merch — set `available: true` when store is live */
export const merchItems = [
  {
    id: "tee-black",
    title: "Trash Can Records Black Tee",
    price: "$32",
    image: "/images/merch/tee-black.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
  },
  {
    id: "tee-white",
    title: "Trash Can Records White Tee",
    price: "$32",
    image: "/images/merch/tee-white.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
  },
] as const;

/** Social profiles */
export const socialLinks = [
  { id: "instagram", name: "Instagram", href: links.instagram },
  { id: "tiktok", name: "TikTok", href: links.tiktok },
  { id: "youtube", name: "YouTube", href: links.youtube },
  { id: "facebook", name: "Facebook", href: links.facebook },
  { id: "threads", name: "Threads", href: links.threads },
  { id: "x", name: "X", href: links.x },
] as const;

/** Footer quick links */
export const footerLinks = [
  { label: "Contact", href: `mailto:${links.contactEmail}` },
  { label: "Booking", href: `mailto:${links.bookingEmail}` },
  { label: "Merch", href: "#merch" },
  { label: "Music", href: "#music" },
] as const;

/** Email list — wire to Mailchimp, ConvertKit, etc. later */
export const emailSignup = {
  heading: "Join the Trash Can Records list",
  subheading: "First access to drops, visuals, and tour dates.",
  placeholder: "you@email.com",
  successMessage: "You're on the list. We'll be in touch.",
} as const;
