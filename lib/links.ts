/** Returns true when a link should appear on the site. */
export function isLinkVisible(item: {
  active?: boolean;
  href: string;
}): boolean {
  if (item.active === false) return false;
  const href = item.href.trim();
  if (!href) return false;
  if (/YOUR_|linktr\.ee\/YOUR|\/YOUR_/i.test(href)) return false;
  return true;
}
