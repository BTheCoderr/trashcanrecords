import { ExternalIcon } from "./icons/PlatformIcons";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const variants = {
  primary:
    "bg-gradient-to-b from-pearl/95 to-chrome/90 text-void font-semibold shadow-glow-sm hover:from-white hover:to-silver hover:shadow-glow border border-white/20",
  secondary:
    "bg-smoke/80 text-pearl border border-white/10 backdrop-blur-sm hover:bg-ash hover:border-white/20",
  ghost:
    "bg-transparent text-chrome hover:text-pearl hover:bg-white/5 border border-transparent",
  outline:
    "bg-transparent text-pearl border border-white/15 hover:border-white/30 hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-xs gap-1.5 rounded-full",
  md: "px-6 py-3 text-sm gap-2 rounded-full",
  lg: "px-8 py-4 text-base gap-2.5 rounded-full",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = true,
  className = "",
  icon,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        inline-flex items-center justify-center
        transition-all duration-300 ease-out
        active:scale-[0.98]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {icon && <span className="shrink-0 opacity-90">{icon}</span>}
      <span>{children}</span>
      {external && variant !== "primary" && (
        <ExternalIcon className="w-3.5 h-3.5 opacity-40" />
      )}
    </a>
  );
}
