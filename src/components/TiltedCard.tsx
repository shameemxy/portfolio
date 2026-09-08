'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { HomepageAchievementBlock } from '@/data/achievements';

interface TiltedCardProps {
  item: HomepageAchievementBlock;
  className?: string;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({ item, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 20,
    stiffness: 150,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const currentMouseX = e.clientX - rect.left;
    const currentMouseY = e.clientY - rect.top;

    const normalizedX = currentMouseX / width - 0.5;
    const normalizedY = currentMouseY / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg transition-colors hover:border-[#C8C8C2] flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Single Surface Content */}
      <div style={{ transform: 'translateZ(20px)' }} className="w-full">
        {/* Top Plain Notation — NO Inner Boxes */}
        <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-6">
          <span className="font-mono text-xs tracking-[0.2em] text-[#707070] uppercase">
            {item.category}
          </span>
          <span className="font-serif text-2xl text-[#C8C8C2] font-semibold">
            {item.number}
          </span>
        </div>

        {/* Optional Image or Dark Exhibition Surface */}
        {item.image ? (
          <div className="relative aspect-[16/9] bg-transparent mb-6 overflow-hidden rounded-md">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
          </div>
        ) : null}

        {/* Card Title — BISOCA FONT */}
        <h3 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-3 leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-[#A5A5A0] leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      {/* Bottom Plain Metadata Ribbon */}
      <div style={{ transform: 'translateZ(10px)' }} className="pt-4 border-t border-[#151515] flex items-center justify-between">
        <span className="font-sans text-[10px] text-[#707070] uppercase tracking-[0.15em]">
          {item.label}
        </span>
        <span className="text-xs text-[#C8C8C2]">→</span>
      </div>
    </motion.div>
  );
};
