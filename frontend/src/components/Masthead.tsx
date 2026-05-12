import type { CompanyContent } from "../data/siteContent";
import { Brand } from "./Brand";

type MastheadProps = Readonly<{
  company: CompanyContent;
}>;

export function Masthead({ company }: MastheadProps) {
  return (
    <header className="masthead">
      <div className="masthead-title">{company.legalName}</div>
      <div className="masthead-main">
        <Brand name={company.brandName} />

        <div className="masthead-slogan">{company.slogan}</div>
        <div className="masthead-visual" aria-hidden="true">
          <div className="visual-sky" />
          <div className="visual-dish" />
          <div className="visual-tower" />
        </div>
      </div>
      <div className="sub-band">
        {company.welcomeMessage}
        <span className="iso-inline">{company.isoStandard}</span>.
      </div>
    </header>
  );
}
