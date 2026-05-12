import type { ReactNode } from "react";
import { classNames } from "../lib/classNames";

type PanelProps = Readonly<{
  title: string;
  children: ReactNode;
  className?: string;
}>;

type PanelBodyProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function Panel({ title, children, className }: PanelProps) {
  return (
    <section className={classNames("panel", className)}>
      <h2 className="panel-title">{title}</h2>
      {children}
    </section>
  );
}

export function PanelBody({ children, className }: PanelBodyProps) {
  return <div className={classNames("panel-body", className)}>{children}</div>;
}
