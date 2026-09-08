import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Index Number & Subheader */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase font-mono">
            01 / STUDIO
          </span>
          <span className="w-12 h-[1px] bg-[#292929]" />
          <span className="font-sans text-xs tracking-[0.25em] text-[#A5A5A0] uppercase font-medium">
            {siteConfig.field}
          </span>
        </div>

        {/* Large Silver Editorial Typography Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#F3F3F0] font-normal leading-[1.05] mb-8">
            Building thoughtful <span className="font-serif italic text-[#C8C8C2]">software products.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#A5A5A0] leading-relaxed max-w-2xl mb-12 font-normal">
            {siteConfig.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/#work"
              className="font-sans text-xs tracking-[0.25em] font-semibold text-[#0A0A0A] bg-[#F3F3F0] px-8 py-4 border border-[#F3F3F0] hover:bg-[#C8C8C2] hover:border-[#C8C8C2] transition-colors uppercase rounded-md"
            >
              VIEW WORK
            </Link>
            <Link
              href="/#about"
              className="font-sans text-xs tracking-[0.25em] font-semibold text-[#F3F3F0] bg-[#0A0A0A]/60 backdrop-blur-sm px-8 py-4 border border-[#292929] hover:border-[#C8C8C2] transition-colors uppercase rounded-md"
            >
              ABOUT
            </Link>
          </div>
        </div>

        {/* Editorial Sub-Metadata Ribbon */}
        <div className="mt-20 pt-8 border-t border-[#151515] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#707070] tracking-[0.15em] uppercase font-mono">
          <div>
            <span className="block text-[#A5A5A0] font-medium mb-1 font-sans">FOCUS</span>
            AI & Safety Systems
          </div>
          <div>
            <span className="block text-[#A5A5A0] font-medium mb-1 font-sans">DISCIPLINE</span>
            Full-Stack Engineering
          </div>
          <div>
            <span className="block text-[#A5A5A0] font-medium mb-1 font-sans">LOCATION</span>
            Global Studio
          </div>
          <div>
            <span className="block text-[#A5A5A0] font-medium mb-1 font-sans">STATUS</span>
            Active Builder
          </div>
        </div>
      </div>
    </section>
  );
};
