import React from 'react';
import { Hero } from '@/components/Hero';
import { EditorialProjectFeature } from '@/components/EditorialProjectFeature';
import { ArchiveSection } from '@/components/ArchiveSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { LabSection } from '@/components/LabSection';
import { StorySection } from '@/components/StorySection';
import { ComingSoon } from '@/components/ComingSoon';
import { AboutSection } from '@/components/AboutSection';
import { ContactForm } from '@/components/ContactForm';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Projects (Asymmetrical Editorial Compositions) */}
      <EditorialProjectFeature projects={projects} />

      {/* 3. Personal Design & Engineering Manifesto Ribbon (Clean Sans-Serif Typography) */}
      <section className="py-16 border-b border-[#292929] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs tracking-[0.25em] text-[#707070] uppercase">
            PHILOSOPHY / MANIFESTO
          </span>
          <p className="font-sans text-lg md:text-xl text-[#F3F3F0] font-medium tracking-[0.02em] leading-relaxed max-w-2xl text-center md:text-left">
            "Software should solve tangible problems with visual discipline and robust engineering underneath."
          </p>
          <span className="font-mono text-xs text-[#A5A5A0] tracking-[0.2em] uppercase">
            SHAMEEM ARCHIVE
          </span>
        </div>
      </section>

      {/* 4. Complete Project Catalog / Archive */}
      <ArchiveSection />

      {/* 5. Recognition, Achievements & Experience (TiltedCard Blocks + Explore Control) */}
      <AchievementsSection />

      {/* 6. Current Focus / Lab */}
      <LabSection />

      {/* 7. Story & Progression */}
      <StorySection />

      {/* 8. Permanent Coming Soon Showcase */}
      <ComingSoon />

      {/* 9. Identity & About */}
      <AboutSection />

      {/* 10. Contact & EmailJS Dispatch */}
      <ContactForm />
    </div>
  );
}
