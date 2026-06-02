/** Returns true when a link should render (active + valid URL). */
export function isLinkVisible(item: {
  active?: boolean;
  href: string;
}): boolean {
  if (item.active !== true) return false;
  const href = item.href.trim();
  if (!href) return false;
  if (/YOUR_|linktr\.ee\/YOUR|\/YOUR_/i.test(href)) return false;
  return true;
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}
