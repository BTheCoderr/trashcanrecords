import { brand, footerLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-void px-4 py-12">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-display text-lg tracking-wide chrome-gradient-text">
          {brand.artist}
        </p>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-chrome/50">
          {brand.label}
        </p>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-chrome/60 transition-colors hover:text-pearl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-[11px] text-chrome/40">
          © {brand.copyrightYear} {brand.label}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
