import type { NavigationItem } from "../data/siteContent";
import parNetLogo from "../assets/ParNetLogo.png";
import { Navigation } from "./Navigation";

type SiteFooterProps = Readonly<{
  links: readonly NavigationItem[];
}>;

export function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer className="footer">
      <Navigation ariaLabel="Secondary" items={links} />
      <img className="footer-logo" src={parNetLogo} alt="" aria-hidden="true" />
    </footer>
  );
}
