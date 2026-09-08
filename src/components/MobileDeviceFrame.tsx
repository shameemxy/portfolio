'use client';

import React from 'react';
import { ProjectImage } from '@/data/projects';
import { EditorialImage } from './EditorialImage';

interface MobileDeviceFrameProps {
  image: ProjectImage;
  showFrame?: boolean;
  className?: string;
}

export const MobileDeviceFrame: React.FC<MobileDeviceFrameProps> = ({
  image,
  showFrame = true,
  className = '',
}) => {
  if (!showFrame) {
    return (
      <div className={`relative bg-[#101010] border border-[#292929] overflow-hidden rounded-sm ${className}`}>
        <EditorialImage
          src={image.src}
          alt={image.alt}
          titleText={image.label}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative max-w-[320px] mx-auto border-2 border-[#333333] bg-[#0A0A0A] p-3 rounded-sm shadow-none ${className}`}>
      {/* Device Top Speaker Notch / Status Bar */}
      <div className="flex items-center justify-between px-2 pb-2 text-[10px] font-mono text-[#707070] border-b border-[#151515] mb-2">
        <span>09:41</span>
        <div className="w-12 h-1.5 bg-[#292929] rounded-full" />
        <span>100%</span>
      </div>

      {/* Screenshot Frame Content (Native image colors preserved) */}
      <div className="relative aspect-[9/19] bg-[#101010] border border-[#292929] overflow-hidden flex items-center justify-center rounded-sm">
        <EditorialImage
          src={image.src}
          alt={image.alt}
          titleText={image.label}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Device Bottom Indicator Bar */}
      <div className="mt-3 flex justify-center">
        <div className="w-24 h-1 bg-[#292929] rounded-full" />
      </div>
    </div>
  );
};
