import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase font-mono">
            07 / IDENTITY
          </span>
          <span className="w-12 h-[1px] bg-[#292929]" />
        </div>

        {/* Large Typographic Thesis */}
        <div className="max-w-4xl">
          <h2 className="font-serif text-4xl md:text-6xl text-[#F3F3F0] font-normal leading-tight mb-8">
            ABOUT <span className="italic text-[#C8C8C2]">SHAMEEM</span>
          </h2>

          <div className="space-y-6 text-base md:text-xl text-[#A5A5A0] leading-relaxed font-normal mb-12">
            <p className="border-l-2 border-[#C8C8C2] pl-6 py-1 text-[#F3F3F0]">
              {siteConfig.aboutThesis}
            </p>
            <p className="pl-6">
              {siteConfig.aboutDetails}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
