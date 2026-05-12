import type { HeroContent } from "../data/siteContent";

type PromoHeroProps = Readonly<{
  content: HeroContent;
}>;

export function PromoHero({ content }: PromoHeroProps) {
  return (
    <section className="hero-card">
      <div className="hero-main">
        <div className="hero-image">
          <div className="hero-overlay">
            <h1>
              <span>{content.title}</span>
              <span className="hero-title-sub">{content.subtitle}</span>
            </h1>
            <p>{content.ctaText}</p>
          </div>
        </div>
        <div className="hero-side" aria-hidden="true">
          <div className="hero-side-top">
            <div className="hero-side-caption">{content.sideCaption}</div>
          </div>
          <div className="hero-side-bottom" />
        </div>
      </div>
    </section>
  );
}
