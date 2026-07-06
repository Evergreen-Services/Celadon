import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Explore from "../components/navigation/Explore";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import Payments from "../components/sections/Payments";
import Cards from "../components/cards/Cards";
import ListSection from "../components/ui/List";
import ContactSection from "../components/sections/Contact";
import Gallery from "../components/sections/Gallery";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
import Team from "../components/sections/Team";
import Pricing from "../components/sections/Pricing";
import Features from "../components/sections/Features";
import About from "../components/sections/About";

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
