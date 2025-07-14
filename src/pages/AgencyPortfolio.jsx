"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Sections
import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
// import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";

export default function AgencyPortfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "impact", "about", "services", "projects", "team", "testimonials", "process", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <HeroSection scrollToSection={scrollToSection} />
      <ImpactSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      {/* <ProcessSection /> */}
      <ContactSection />

      <Footer />
    </div>
  );
}
