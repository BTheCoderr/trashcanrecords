/**
 * ═══════════════════════════════════════════════════════════════════
 *  TRASH CAN RECORDS — SITE CONFIG
 *  Set active: true only when a link or email is ready to go live.
 * ═══════════════════════════════════════════════════════════════════
 */

import { isEmailActive, isLinkVisible } from "@/lib/links";

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

export const links = {
  spotify:
    "https://open.spotify.com/artist/6XNtKuqpczRdXkcE94qZ3s?si=U1js5QKWQKGwImXB9daWwg&nd=1&dlsi=03d049e93c6a46ef",
  appleMusic: "https://music.apple.com/us/artist/bthesound/1896675646",
  youtubeChannel: "https://www.youtube.com/@trashcanrecords514",
  youtubeMusic: "https://music.youtube.com/search?q=BTheSound",
  instagram: "https://instagram.com/bthesound_",
  tiktok: "",
  facebook: "",
  threads: "",
  x: "",
  allPlatforms: "",
  soundcloud: "",
  audiomack: "",
} as const;

/** Set active: true + real address when inboxes are live */
export const emails = {
  contact: {
    address: "contact@trashcanrecords.com",
    active: false,
  },
  booking: {
    address: "booking@trashcanrecords.com",
    active: false,
  },
} as const;

export const showContactSection =
  isEmailActive(emails.contact) || isEmailActive(emails.booking);

export const youtubeVideos = {
  channel: links.youtubeChannel,
  short: {
    active: true,
    id: "8ZvmMZhA0jA",
    url: "https://youtu.be/8ZvmMZhA0jA?si=IC3KGjyIWGEOCwqZ",
    embed: "https://www.youtube.com/embed/8ZvmMZhA0jA",
    thumbnail: "https://i.ytimg.com/vi/8ZvmMZhA0jA/hqdefault.jpg",
    title: "I Don't Say Much",
    description: "Official clay animation visual",
  },
  fullVisual: {
    active: false,
    id: "",
    url: "",
    embed: "",
    thumbnail: "",
    title: "I Don't Say Much",
    description: "Official clay animation visual",
  },
} as const;

export const hero = {
  videoSrc: "/videos/latest-visual.mp4",
  videoEnabled: true,
  posterImage: brandAssets.logoBanner,
  fallbackImage: brandAssets.logoBanner,
  badge: "New Visual",
  autoplay: true,
  muted: true,
  loop: true,
  /** Video includes title cards — keep false to avoid duplicate copy over the visual */
  videoHasTitleCards: true,
  /** Plain text at bottom (no background panels). Off when videoHasTitleCards if you crop titles out. */
  showHeroCopy: true,
} as const;

export const heroCTAs = {
  watchVisual: {
    label: "Watch Visual",
    href: youtubeVideos.short.url,
    active: true,
  },
  listenNow: {
    label: "Listen Now",
    href: links.spotify,
    active: true,
  },
  shopMerch: {
    label: "Shop Merch",
    href: "#merch",
    active: true,
  },
} as const;

/** Single source for the latest release + visual */
export const latestDrop = {
  title: "I Don't Say Much",
  subtitle: "Official Clay Animation Visual",
  badge: "Latest Drop",
  thumbnail: youtubeVideos.short.thumbnail,
  watch: {
    youtube: youtubeVideos.short.url,
    label: "Watch Visual",
  },
  listen: {
    spotify: links.spotify,
    appleMusic: links.appleMusic,
    spotifyLabel: "Spotify",
    appleLabel: "Apple Music",
  },
} as const;

export const latestVisual = latestDrop;

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
    active: true,
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

/** Channel only — visual lives in Latest Drop section */
const videoLinksAll = [
  {
    id: "channel",
    title: "YouTube Channel",
    description: "Subscribe for visuals, shorts & drops",
    href: youtubeVideos.channel,
    buttonLabel: "Watch on YouTube",
    active: true,
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
    title: "Black Tee",
    titleFull: "Trash Can Records Black Tee",
    price: "$35",
    image: "/images/merch/tee-black.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
    active: true,
  },
  {
    id: "tee-white",
    title: "White Tee",
    titleFull: "Trash Can Records White Tee",
    price: "$35",
    image: "/images/merch/tee-white.png",
    shopUrl: "#join",
    available: false,
    notifyLabel: "Notify Me",
    active: true,
  },
] as const;

const footerLinksAll = [
  { label: "Music", href: "#music", active: true },
  { label: "Merch", href: "#merch", active: true },
  { label: "Contact", href: "#contact", active: isEmailActive(emails.contact) },
  { label: "Booking", href: "#booking", active: isEmailActive(emails.booking) },
] as const;

export const footerLinks = footerLinksAll.filter(isLinkVisible);

export const contactInquiry = {
  active: isEmailActive(emails.contact),
  formName: "contact",
  eyebrow: "General",
  title: "Contact",
  subheading: "Press, partnerships, fan mail, and general questions.",
  email: emails.contact.address,
  emailLabel: "Email",
  submitLabel: "Send Message",
  successMessage: "Message sent. We'll get back to you soon.",
  fields: [
    { name: "name", label: "Name", type: "text" as const, placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email" as const, placeholder: "you@email.com", required: true },
    { name: "subject", label: "Subject", type: "text" as const, placeholder: "What's this about?", required: true },
    { name: "message", label: "Message", type: "textarea" as const, placeholder: "Your message…", required: true, rows: 5 },
  ],
};

export const bookingInquiry = {
  active: isEmailActive(emails.booking),
  formName: "booking",
  eyebrow: "Live & business",
  title: "Booking",
  subheading: "Shows, features, collaborations, and appearance requests.",
  email: emails.booking.address,
  emailLabel: "Email",
  submitLabel: "Submit Booking Request",
  successMessage: "Booking request received. We'll review and respond.",
  fields: [
    { name: "name", label: "Name", type: "text" as const, placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email" as const, placeholder: "you@email.com", required: true },
    { name: "organization", label: "Venue / Organization", type: "text" as const, placeholder: "Club, festival, brand, etc.", required: true },
    { name: "event-date", label: "Event Date", type: "text" as const, placeholder: "e.g. June 15, 2026 or TBD", required: false },
    { name: "location", label: "Location", type: "text" as const, placeholder: "City, state / country", required: false },
    { name: "details", label: "Details", type: "textarea" as const, placeholder: "Set type, budget, audience size, other details…", required: true, rows: 5 },
  ],
};

export const emailSignup = {
  heading: "Join the Trash Can Records list",
  subheading: "First access to drops, visuals, and tour dates.",
  placeholder: "you@email.com",
  successMessage: "You're on the list. We'll be in touch.",
  active: true,
} as const;
