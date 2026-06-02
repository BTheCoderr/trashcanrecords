import { LinkButton } from "./LinkButton";

type MerchCardProps = {
  title: string;
  titleFull?: string;
  price: string;
  image?: string;
  shopUrl: string;
  available: boolean;
  notifyLabel?: string;
};

export function MerchCard({
  title,
  titleFull,
  price,
  image,
  shopUrl,
  available,
  notifyLabel = "Notify Me",
}: MerchCardProps) {
  const displayTitle = titleFull ?? title;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-smoke/40 transition-all duration-300 hover:border-white/12 hover:shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-ash to-void">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={displayTitle}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6">
            <div className="h-24 w-24 rounded-lg border border-dashed border-white/10" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
        {!available && (
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-void/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-chrome backdrop-blur-sm">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-medium leading-snug text-pearl">{displayTitle}</h3>
        <p className="mt-1 font-display text-lg tracking-wide text-chrome">{price}</p>
        <div className="mt-auto pt-4">
          {available ? (
            <LinkButton
              href={shopUrl}
              variant="primary"
              size="sm"
              className="w-full justify-center"
            >
              Shop Now
            </LinkButton>
          ) : (
            <LinkButton
              href={shopUrl}
              variant="outline"
              size="sm"
              external={false}
              className="w-full justify-center"
            >
              {notifyLabel}
            </LinkButton>
          )}
        </div>
      </div>
    </article>
  );
}
