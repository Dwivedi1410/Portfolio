import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import {ProjectSection} from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TechAndTools } from "@/sections/TechnologyAndTools";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TapeSection />
      <ProjectSection />
      <ExperienceSection />
      <TechAndTools />
      <ContactSection />
    </div>
  );
}
