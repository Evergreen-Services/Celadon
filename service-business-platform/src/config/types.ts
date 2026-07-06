export type PageSection = {
  type: string;
  heading?: string;
  body?: string;
  items?: Array<{
    title: string;
    description?: string;
    eyebrow?: string;
    href?: string;
    buttonLabel?: string;
  }>;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
    variant?: string;
  };
  buttons?: Array<{
    label: string;
    href: string;
    external?: boolean;
    variant?: string;
  }>;
};

export type ClientPage = {
  slug: string;
  title: string;
  subtitle?: string;
  sections?: PageSection[];
};

export type ClientTheme = {
  colors: {
    primary: string;
    primaryContrast: string;
    secondary: string;
    secondaryContrast: string;
    background: string;
    surface: string;
    text: string;
    mutedText: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  radii: {
    button: string;
    card: string;
    panel: string;
  };
  shadows: {
    card: string;
    elevated: string;
  };
};

export type ClientConfig = {
  siteUrl: string;
  business: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    services: string[];
    serviceArea: string[];
  };
  branding: {
    favicon: string;
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    heroImage?: {
      src: string;
      alt: string;
    };
    socialImage?: string;
  };
  theme: ClientTheme;
  features: {
    hero: boolean;
    services: boolean;
    gallery: boolean;
    testimonials: boolean;
    contact: boolean;
    payments: boolean;
  };
  pages: ClientPage[];
  navigation: Array<{
    label: string;
    href: string;
  }>;
  testimonials: Array<{
    name: string;
    quote: string;
  }>;
  copy?: {
    exploreLabel?: string;
    footerContactLabel?: string;
    footerServiceAreaLabel?: string;
    footerCopyrightNotice?: string;
  };
};
