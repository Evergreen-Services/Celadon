import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Explore from "./sections/Explore";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Payments from "./sections/Payments";
import Cards from "./sections/Cards";
import ListSection from "./sections/List";
import ContactSection from "./sections/Contact";
import Gallery from "./sections/Gallery";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Team from "./sections/Team";
import Pricing from "./sections/Pricing";
import Features from "./sections/Features";
import About from "./sections/About";

// Registry of available section components. Keys are lowercase names used by config/pages or custom names.
export const sectionRegistry: Record<string, any> = {
  hero: Hero,
  services: Services,
  testimonials: Testimonials,
  explore: Explore,
  header: Header,
  footer: Footer,
  payments: Payments,
  cards: Cards,
  list: ListSection,
  contact: ContactSection,
  gallery: Gallery,
  cta: CTA,
  faq: FAQ,
  team: Team,
  pricing: Pricing,
  features: Features,
  about: About,
};

export default sectionRegistry;
