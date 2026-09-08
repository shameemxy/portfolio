'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectImage } from '@/data/projects';
import { EditorialImage } from './EditorialImage';
import { MobileDeviceFrame } from './MobileDeviceFrame';

interface DepthCarouselProps {
  screenshots: ProjectImage[];
  className?: string;
}

export const DepthCarousel: React.FC<DepthCarouselProps> = ({ screenshots = [], className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="w-full py-16 bg-[#0A0A0A] border border-[#292929] text-center p-8 rounded-lg">
        <span className="font-bisoca text-xl text-[#F3F3F0] block mb-2">Visual Exhibition Pending</span>
        <span className="font-sans text-xs text-[#707070] uppercase tracking-[0.15em]">
          Screenshots will be uploaded to this catalog section.
        </span>
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const currentImage = screenshots[activeIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* 3D Depth Viewport — Transparent layout wrapper without extra nested frames */}
      <div className="relative aspect-[16/10] bg-[#0A0A0A] border border-[#292929] rounded-lg p-4 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96, z: -40 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            exit={{ opacity: 0, scale: 1.04, z: 40 }}
            transition={{ duration: 0.28 }}
            className="w-full h-full flex items-center justify-center"
          >
            {currentImage.isMobile ? (
              <MobileDeviceFrame image={currentImage} showFrame={true} />
            ) : (
              <EditorialImage
                src={currentImage.src}
                alt={currentImage.alt}
                titleText={currentImage.label}
                className="w-full h-full object-contain rounded-md"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Controls (Crisp monochrome rounded square arrows) */}
        {screenshots.length > 1 && (
          <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous Screenshot"
              className="pointer-events-auto w-11 h-11 border border-[#292929] bg-[#0A0A0A]/90 hover:border-[#C8C8C2] text-[#F3F3F0] flex items-center justify-center font-mono text-base transition-colors rounded-md backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Screenshot"
              className="pointer-events-auto w-11 h-11 border border-[#292929] bg-[#0A0A0A]/90 hover:border-[#C8C8C2] text-[#F3F3F0] flex items-center justify-center font-mono text-base transition-colors rounded-md backdrop-blur-sm"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Caption & Index Metadata Ribbon */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 px-2 text-xs text-[#707070] uppercase font-mono">
        <span>{currentImage.label || currentImage.alt}</span>
        <span>
          SCREENSHOT {activeIndex + 1} OF {screenshots.length}
        </span>
      </div>
    </div>
  );
};
