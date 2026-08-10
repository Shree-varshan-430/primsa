import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Offerings from "@/components/sections/Offerings";
import Amenities from "@/components/sections/Amenities";
import StatementSection from "@/components/sections/StatementSection";
import PerfectFor from "@/components/sections/PerfectFor";
import AboutUs from "@/components/sections/AboutUs";
import Gallery from "@/components/sections/Gallery";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Offerings />
      <Amenities />
      <StatementSection />
      <PerfectFor />
      <AboutUs />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
