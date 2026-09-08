'use client';

import React from 'react';
import Folder from './Folder';
import { ExploreControl } from './ExploreControl';
import { detailedAchievements } from '@/data/achievements';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              03 / RECOGNITION & ACHIEVEMENTS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F3F3F0] font-normal">
              ACHIEVEMENTS <span className="italic text-[#C8C8C2]">& EXPERIENCE</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A5A5A0] max-w-md leading-relaxed">
            Curated engineering recognitions, competitive hackathons, technical presentation defenses, and industry software development experiences.
          </p>
        </div>

        {/* 3 Interactive Physical Folders (Black, Light Silver, Off-Black) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center my-8">
          {detailedAchievements.map((category, index) => {
            const folderColors = ['#111111', '#d6d6d6', '#222222'];
            const color = folderColors[index % folderColors.length];

            const folderItems = category.items.slice(0, 3).map((item) => (
              <div key={item.id} className="w-full h-full flex flex-col justify-between p-2 text-[#0A0A0A] font-sans">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-12 object-cover rounded-sm mb-1" />
                ) : null}
                <span className="font-bisoca text-[10px] font-semibold leading-tight line-clamp-2">
                  {item.title}
                </span>
                <span className="font-mono text-[8px] text-[#555555] uppercase tracking-wider block">
                  {item.metadata || 'RECORD'}
                </span>
              </div>
            ));

            return (
              <Folder
                key={category.id}
                color={color}
                size={1.1}
                items={folderItems}
                title={category.categoryTitle}
                subtitle={`${category.items.length} ARCHIVED RECORDS`}
              />
            );
          })}
        </div>

        {/* Explore Control */}
        <ExploreControl />
      </div>
    </section>
  );
};
