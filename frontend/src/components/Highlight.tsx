import type { HighlightContent } from "../data/siteContent";

type HighlightProps = Readonly<{
  content: HighlightContent;
}>;

export function Highlight({ content }: HighlightProps) {
  return (
    <section className="highlight">
      <h2>{content.title}</h2>
      {content.body && <p>{content.body}</p>}
      <ul>
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
