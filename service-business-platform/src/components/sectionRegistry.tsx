import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Explore from "./sections/Explore";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Payments from "./sections/Payments";

// Registry of available section components. Keys are lowercase names used by config/pages.
export const sectionRegistry: Record<string, any> = {
  hero: Hero,
  services: Services,
  testimonials: Testimonials,
  explore: Explore,
  header: Header,
  footer: Footer,
  payments: Payments,
};

export default sectionRegistry;
