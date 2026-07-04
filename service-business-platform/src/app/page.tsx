import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Payments from "@/components/sections/Payments";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Payments />
      <Testimonials />
    </>
  );
}