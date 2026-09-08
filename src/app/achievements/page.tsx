import React from 'react';
import Link from 'next/link';
import Folder from '@/components/Folder';
import { detailedAchievements } from '@/data/achievements';

export const metadata = {
  title: 'Achievements & Experience | Shameem',
  description: 'Exhibition catalog of awards, hackathons won, technical presentation defenses, and industry software development experiences by Shameem.',
};

export default function AchievementsPage() {
  const folderColors = ['#111111', '#d6d6d6', '#222222'];

  return (
    <div className="min-h-screen bg-transparent pt-12 pb-24">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#292929]">
          <Link
            href="/#achievements"
            className="font-sans text-xs tracking-[0.2em] uppercase text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>RETURN TO STUDIO PORTFOLIO</span>
          </Link>
          <span className="font-sans text-xs text-[#707070] tracking-[0.15em] uppercase font-mono">
            EXHIBITION ROOM 02 / CATALOG
          </span>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
          CHRONICLE & ARCHIVE
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#F3F3F0] font-normal mb-4">
          ACHIEVEMENTS <span className="italic text-[#C8C8C2]">& EXPERIENCES</span>
        </h1>
        <p className="font-sans text-lg text-[#A5A5A0] max-w-2xl leading-relaxed font-normal">
          An interactive physical folder collection documenting software awards, hackathon recognitions, technical demonstration defenses, and professional development milestones.
        </p>
      </div>

      {/* Interactive Folder Exhibition Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {detailedAchievements.map((category, catIdx) => {
          const color = folderColors[catIdx % folderColors.length];

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
            <div key={category.id} className="border border-[#292929] bg-[#0A0A0A] p-8 md:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Folder Object */}
                <div className="lg:col-span-4 flex justify-center">
                  <Folder
                    color={color}
                    size={1.25}
                    items={folderItems}
                    title={category.categoryTitle}
                    subtitle={`${category.items.length} ARCHIVED RECORDS`}
                  />
                </div>

                {/* Detailed Record Cards List */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="pb-4 border-b border-[#292929]">
                    <h2 className="font-bisoca text-2xl text-[#F3F3F0] mb-1">
                      {category.categoryTitle}
                    </h2>
                    <p className="font-sans text-xs text-[#A5A5A0]">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={item.id}
                        className="border border-[#292929] bg-[#101010] p-5 rounded-md flex flex-col justify-between hover:border-[#C8C8C2] transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-[#151515] mb-3 font-mono text-[10px] text-[#707070] uppercase">
                            <span>RECORD #{itemIdx + 1}</span>
                            {item.metadata && (
                              <span className="text-[#A5A5A0] font-sans text-[9px] tracking-[0.1em]">
                                {item.metadata}
                              </span>
                            )}
                          </div>

                          {item.image ? (
                            <div className="aspect-[16/9] bg-transparent mb-3 overflow-hidden rounded-md">
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
                            </div>
                          ) : null}

                          <h3 className="font-bisoca text-xl text-[#F3F3F0] font-normal mb-2 leading-snug">
                            {item.title}
                          </h3>

                          <p className="font-sans text-xs text-[#A5A5A0] leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#151515] flex items-center justify-between text-[10px] text-[#707070] uppercase font-mono">
                          <span>CATALOGUED ITEM</span>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F3F3F0] hover:text-[#C8C8C2] transition-colors"
                            >
                              VIEW LINK ↗
                            </a>
                          ) : (
                            <span>ARCHIVE DOCUMENT</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
