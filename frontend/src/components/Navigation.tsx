import type { NavigationItem } from "../data/siteContent";

type NavigationProps = Readonly<{
  items: readonly NavigationItem[];
  ariaLabel: string;
  className?: string;
}>;

export function Navigation({ items, ariaLabel, className }: NavigationProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {items.map(({ href, isActive, label }) => (
        <a className={isActive ? "active" : undefined} href={href} key={label}>
          {label}
        </a>
      ))}
    </nav>
  );
}
