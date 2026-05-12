export type CompanyContent = Readonly<{
  legalName: string;
  brandName: string;
  brandSubtitle: string;
  slogan: string;
  welcomeMessage: string;
  isoStandard: string;
}>;

export type NavigationItem = Readonly<{
  label: string;
  href: string;
  isActive?: boolean;
}>;

export type NewsItem = Readonly<{
  title: string;
  meta: string;
}>;

export type LinkItem = Readonly<{
  label: string;
  href: string;
}>;

export type ProviderItem = Readonly<{
  description: string;
  meta: string;
}>;

export type StatItem = Readonly<{
  label: string;
  value: string;
}>;

export type SidebarContent = Readonly<{
  news: readonly NewsItem[];
  areas: readonly LinkItem[];
  providers: readonly ProviderItem[];
  stats: readonly StatItem[];
  statsFootnote: string;
}>;

export type HeroContent = Readonly<{
  title: string;
  subtitle: string;
  ctaText: string;
  sideCaption: string;
}>;

export type MediaVariant = "wide" | "tall";

export type InfoSectionContent = Readonly<{
  title: string;
  body: readonly string[];
  mediaVariant: MediaVariant;
  isReversed?: boolean;
}>;

export type HighlightContent = Readonly<{
  title: string;
  body: string;
  items: readonly string[];
}>;

export type PageContent = Readonly<{
  title: string;
  hero: HeroContent;
  infoSections: readonly InfoSectionContent[];
  highlight: HighlightContent;
}>;

export const companyContent = {
  legalName: "PARNET INGENIERÍA S.A DE C.V.",
  brandName: "PARNET",
  brandSubtitle: "Ingeniería S.A. de C.V.",
  slogan: "Telecomunicaciones, Voz, Datos, Fibra Óptica.",
  welcomeMessage:
    "Bienvenido a PARNET Ingeniería S.A. de C.V. Continuamente actualizamos el Sitio. Revisa nuestros estándares de calidad",
  isoStandard: "ISO 9000",
} as const satisfies CompanyContent;

export const mainNavigation = [
  { label: "Página Principal", href: "#", isActive: true },
  { label: "¿Quienes Somos?", href: "#" },
  { label: "Clientes", href: "#" },
  { label: "Servicios", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Casos De Éxito", href: "#" },
  { label: "Contactos", href: "#" },
  { label: "Socios", href: "#" },
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  { label: "Página Principal", href: "#" },
  { label: "¿Quienes Somos?", href: "#" },
  { label: "Clientes", href: "#" },
  { label: "Servicios", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Casos De Éxito", href: "#" },
  { label: "Contacto", href: "#" },
  { label: "Soporte", href: "#" },
] as const satisfies readonly NavigationItem[];

export const sidebarContent = {
  news: [
    {
      title: "Alianzas en telecomunicaciones generan competitividad.",
      meta: "Standard & Poor's. [Leer más...]",
    },
    {
      title: "La TV satelital cumple 50 años.",
      meta: "[Leer más...]",
    },
    {
      title: "Control y monitoreo remoto para redes metropolitanas.",
      meta: "[Leer más...]",
    },
  ],
  areas: [
    { label: "Certificaciones", href: "#" },
    { label: "Telecomunicaciones", href: "#" },
    { label: "Redes Eléctricas", href: "#" },
    { label: "Circuito Cerrado TV", href: "#" },
    { label: "Corriente Regulada", href: "#" },
    { label: "Data Centers", href: "#" },
    { label: "Fibra Óptica", href: "#" },
    { label: "Cables Estructurados", href: "#" },
    { label: "Pólizas", href: "#" },
    { label: "Outsourcing", href: "#" },
    { label: "Administración", href: "#" },
  ],
  providers: [
    {
      description: "PANDUIT™ es líder mundial en el diseño y fabricación de productos para cableado y comunicaciones.",
      meta: "[Leer más...]",
    },
    {
      description: "Cisco Systems es líder mundial en redes para Internet.",
      meta: "[Leer más...]",
    },
  ],
  stats: [
    { label: "Conectados:", value: "674" },
    { label: "Visitas:", value: "07899" },
  ],
  statsFootnote: "Copyright 2012",
} as const satisfies SidebarContent;

export const pageContent = {
  title: "Página Principal",
  hero: {
    title: "10GbE",
    subtitle: "Solutions",
    ctaText: "Learn More...",
    sideCaption: "Discover the power of uninterruptible power.",
  },
  infoSections: [
    {
      title: "¿Cual es el objetivo principal de PARNET?",
      body: [
        "Nuestra empresa tiene como objetivo suministrar Soluciones Integrales en Telecomunicaciones (Voz y datos), eléctricas que resuelvan las necesidades empresariales con productos, aplicaciones, servicios y tecnología de punta, la cual simplifique el trabajo al usuario final obteniendo una comunicación eficiente, de alta confiabilidad, incrementando los índices de productividad y competitividad de su empresa y del personal de la misma.",
        "Las fibras ópticas y los sistemas de comunicaciones, constituyen el desarrollo tecnológico más importante de los últimos años.",
      ],
      mediaVariant: "wide",
    },
    {
      title: "¿Hay buena energía dentro de su empresa?",
      body: [
        "Normalmente, las personas y los encargados de la informática en las empresas ven en los virus a los principales enemigos a combatir en aras de no perder información del negocio. No obstante, según la empresa de seguridad energética APC, el 60 por ciento de los daños de los equipos y la desaparición de datos en los computadores es ocasionada por problemas asociados a la energía eléctrica.",
        "Picos, sobrevoltajes, trasientes, interrupciones, apagones y distorsiones, entre otros, son algunos de los males más comunes que sufre la energía eléctrica y que pueden mandar a la basura todas las inversiones que usted o su empresa han hecho en computadores, televisores planos, teatros caseros, etc.",
      ],
      mediaVariant: "tall",
    },
  ],
  highlight: {
    title: "Con el afán de brindarle soluciones integrales, Parnet Ingeniería le ofrece desarrollo de software tales como:",
    body: "",
    items: [
      "Aplicaciones a la Medida",
      "Aplicaciones Web",
      "Aplicaciones Cliente-Servidor",
      "Desarrollo de Aplicaciones Multimedia",
      "Software de Nómina para el control total de sus empleados",
      "Aplicaciones móviles para celulares y PDA's",
      "Bases de Datos",
    ],
  },
} as const satisfies PageContent;
