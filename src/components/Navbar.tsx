'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { useTheme } from './ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const resumeUrl = siteConfig.socials.resume || '/resume/Shameem_Muhammed_Resume.pdf';

  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 md:px-6">
      {/* Floating Translucent Container */}
      <div className="bg-[#0A0A0A]/85 backdrop-blur-md border border-[#292929] rounded-full px-8 py-3.5 flex items-center justify-between shadow-none transition-colors hover:border-[#333333]">
        {/* Brand Logo Identity */}
        <Link href="/" className="group flex items-center gap-3 shrink-0 mr-8 md:mr-16">
          <span className="w-8 h-8 border border-[#292929] bg-[#101010] flex items-center justify-center font-serif text-sm font-bold text-[#F3F3F0] group-hover:border-[#C8C8C2] transition-colors rounded-full">
            S
          </span>
          <span className="font-sans text-xs tracking-[0.25em] font-semibold text-[#F3F3F0] uppercase">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links & Controls */}
        <nav className="hidden md:flex items-center gap-8 md:gap-10">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] tracking-[0.2em] text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors uppercase font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* Resume PDF Link */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] tracking-[0.2em] text-[#F3F3F0] border border-[#292929] px-4 py-1.5 hover:border-[#C8C8C2] transition-colors uppercase font-semibold rounded-full bg-[#151515]"
          >
            RESUME
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#292929] bg-[#151515] text-[#F3F3F0] hover:border-[#C8C8C2] transition-colors"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.02-.39-1.41 0z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.3 2c.43 0 .77.35.73.78-.34 4.09 2.56 7.62 6.64 7.96.43.04.77.41.73.84-.7 7.07-6.66 12.42-13.78 12.42-7.73 0-14-6.27-14-14 0-7.12 5.35-13.08 12.42-13.78.43-.04.8.3.79.74z"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#292929] bg-[#101010] text-[#F3F3F0]"
          >
            {theme === 'dark' ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/>
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.3 2c.43 0 .77.35.73.78-.34 4.09 2.56 7.62 6.64 7.96.43.04.77.41.73.84-.7 7.07-6.66 12.42-13.78 12.42-7.73 0-14-6.27-14-14 0-7.12 5.35-13.08 12.42-13.78.43-.04.8.3.79.74z"/>
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="w-8 h-8 border border-[#292929] bg-[#101010] flex flex-col justify-center items-center gap-1.5 p-1.5 transition-colors rounded-full text-[#F3F3F0]"
          >
            <span className={`w-4 h-[1px] bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`w-4 h-[1px] bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-[1px] bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 border border-[#292929] bg-[#0A0A0A]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 rounded-xl text-[#F3F3F0]">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-xs tracking-[0.2em] text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors uppercase font-medium py-2 border-b border-[#292929]/20"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans text-xs tracking-[0.2em] border border-[#292929] px-4 py-3 text-center uppercase font-semibold text-[#F3F3F0] mt-2 rounded-lg bg-[#151515]"
          >
            RESUME
          </a>
        </div>
      )}
    </header>
  );
};
