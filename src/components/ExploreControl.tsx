'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export const ExploreControl: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center my-8">
      <Link
        href="/achievements"
        className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-sans text-xs tracking-[0.2em] font-medium uppercase ${
          theme === 'light'
            ? 'bg-[#111111] text-[#F3F3F0] border-[#111111] hover:bg-[#222222]'
            : 'bg-[#F3F3F0] text-[#0A0A0A] border-[#F3F3F0] hover:bg-[#C8C8C2]'
        } shadow-lg hover:shadow-xl uppercase shadow-none`}
      >
        <span>EXPLORE</span>
        <span className="font-mono text-sm transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};
