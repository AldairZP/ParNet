import type {
  LinkItem,
  NewsItem,
  ProviderItem,
  SidebarContent,
  StatItem,
} from "../data/siteContent";
import { Panel, PanelBody } from "./Panel";

type NewsPanelProps = Readonly<{
  items: readonly NewsItem[];
}>;

type AreasPanelProps = Readonly<{
  links: readonly LinkItem[];
}>;

type ProvidersPanelProps = Readonly<{
  items: readonly ProviderItem[];
}>;

type StatsPanelProps = Readonly<{
  items: readonly StatItem[];
  footnote: string;
}>;

type SidebarProps = Readonly<{
  content: SidebarContent;
}>;

export function NewsPanel({ items }: NewsPanelProps) {
  return (
    <Panel title="Noticias" className="news">
      <PanelBody>
        <ul className="news-list">
          {items.map(({ meta, title }) => (
            <li key={title}>
              {title}
              <span className="muted">{meta}</span>
            </li>
          ))}
        </ul>
        <button className="panel-button" type="button">
          Control Panel PARNET
        </button>
      </PanelBody>
    </Panel>
  );
}

export function AreasPanel({ links }: AreasPanelProps) {
  return (
    <Panel title="Areas PARNET" className="areas">
      <ul className="panel-list">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function ProvidersPanel({ items }: ProvidersPanelProps) {
  return (
    <Panel title="Marcas y Proveedores" className="brands">
      <PanelBody>
        {items.map(({ description, meta }) => (
          <p key={description}>
            {description}
            <span className="muted">{meta}</span>
          </p>
        ))}
      </PanelBody>
    </Panel>
  );
}

export function StatsPanel({ footnote, items }: StatsPanelProps) {
  return (
    <Panel title="Marcadores" className="stats">
      <PanelBody className="stats-body">
        {items.map(({ label, value }) => (
          <div key={label}>
            <span className="stat-label">{label}</span>
            <span className="stat-value">{value}</span>
          </div>
        ))}
        <div className="muted">{footnote}</div>
      </PanelBody>
    </Panel>
  );
}

export function Sidebar({ content }: SidebarProps) {
  return (
    <aside className="sidebar">
      <NewsPanel items={content.news} />
      <AreasPanel links={content.areas} />
      <ProvidersPanel items={content.providers} />
      <StatsPanel footnote={content.statsFootnote} items={content.stats} />
    </aside>
  );
}
