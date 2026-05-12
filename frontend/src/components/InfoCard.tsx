import type { InfoSectionContent } from "../data/siteContent";
import { classNames } from "../lib/classNames";

type InfoCardProps = Readonly<{
  section: InfoSectionContent;
}>;

export function InfoCard({ section }: InfoCardProps) {
  return (
    <section className={classNames("info-card", section.isReversed && "reverse")}>
      <div className={classNames("media", section.mediaVariant)} aria-hidden="true" />
      <div className="copy">
        <h2>{section.title}</h2>
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
