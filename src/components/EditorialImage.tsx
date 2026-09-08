'use client';

import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  titleText?: string;
  subtitleText?: string;
  badgeText?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  titleText,
  subtitleText,
  badgeText,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const title = titleText || alt || 'Project Screenshot';
    const subtitle = subtitleText || 'Screenshot Preview';

    return (
      <div className={`w-full h-full min-h-[220px] bg-[#101010] border border-[#292929] flex flex-col items-center justify-center p-6 text-center rounded-sm ${className}`}>
        <div className="w-8 h-8 border border-[#292929] bg-[#151515] flex items-center justify-center font-serif text-sm text-[#C8C8C2] mb-3 rounded-sm">
          S
        </div>
        <span className="font-serif text-xl text-[#F3F3F0] mb-1">{title}</span>
        <span className="font-sans text-xs text-[#A5A5A0] tracking-[0.15em] uppercase mb-2">{subtitle}</span>
        {badgeText && (
          <span className="font-sans text-[10px] text-[#707070] bg-[#0A0A0A] px-2 py-0.5 border border-[#292929] uppercase font-mono rounded-sm">
            {badgeText}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-sm ${className}`}
      onError={() => setHasError(true)}
    />
  );
};
