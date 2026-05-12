import type { PageContent } from "../data/siteContent";
import { Highlight } from "./Highlight";
import { InfoCard } from "./InfoCard";
import { PromoHero } from "./PromoHero";

type MainContentProps = Readonly<{
  content: PageContent;
}>;

export function MainContent({ content }: MainContentProps) {
  return (
    <main className="content">
      <div className="content-tab">{content.title}</div>
      <PromoHero content={content.hero} />

      {content.infoSections.map((section) => (
        <InfoCard key={section.title} section={section} />
      ))}

      <Highlight content={content.highlight} />
    </main>
  );
}
