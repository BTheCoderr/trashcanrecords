import { heroCTAs } from "@/config/site";
import { MusicNoteIcon, PlayIcon } from "./icons/PlatformIcons";

export function MobileStickyBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-void/95 px-4 py-3 backdrop-blur-lg md:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg gap-3">
        {heroCTAs.watchVisual.active && (
          <a
            href={heroCTAs.watchVisual.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-1 items-center justify-center gap-2 rounded-full
              bg-gradient-to-b from-pearl/95 to-chrome/90 px-4 py-3
              text-sm font-semibold text-void shadow-glow-sm
              transition-transform active:scale-[0.98]
            "
          >
            <PlayIcon className="h-4 w-4" />
            Watch Visual
          </a>
        )}
        {heroCTAs.listenNow.active && (
          <a
            href={heroCTAs.listenNow.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-1 items-center justify-center gap-2 rounded-full
              border border-white/15 bg-smoke/90 px-4 py-3
              text-sm font-semibold text-pearl
              transition-transform active:scale-[0.98]
            "
          >
            <MusicNoteIcon className="h-4 w-4" />
            Listen
          </a>
        )}
      </div>
    </nav>
  );
}
