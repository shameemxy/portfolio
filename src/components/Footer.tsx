import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-[#0A0A0A] border-t border-[#292929] py-16 text-[#A5A5A0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link href="/" className="group flex items-center gap-3 mb-3">
            <span className="w-7 h-7 border border-[#292929] bg-[#101010] flex items-center justify-center font-serif text-sm font-bold text-[#F3F3F0] group-hover:border-[#C8C8C2] transition-colors rounded-sm">
              S
            </span>
            <span className="font-sans text-sm tracking-[0.25em] font-semibold text-[#F3F3F0] uppercase">
              {siteConfig.name}
            </span>
          </Link>
          <p className="font-sans text-xs text-[#707070] tracking-[0.1em]">
            Building software products and documenting what's next.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.15em]">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#707070] hover:text-[#F3F3F0] transition-colors font-sans"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#707070] hover:text-[#F3F3F0] transition-colors font-sans"
          >
            GITHUB
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#707070] hover:text-[#F3F3F0] transition-colors font-sans"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#151515] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#707070] tracking-[0.15em] uppercase font-mono">
        <div>
          SHAMEEM STUDIO CATALOG
        </div>
        <div>
          CRAFTED WITH EDITORIAL RESTRAINT
        </div>
      </div>
    </footer>
  );
};
