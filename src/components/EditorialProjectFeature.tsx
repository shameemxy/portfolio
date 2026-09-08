'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { EditorialImage } from './EditorialImage';

interface EditorialProjectFeatureProps {
  projects: Project[];
}

export const EditorialProjectFeature: React.FC<EditorialProjectFeatureProps> = ({ projects }) => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-24 border-b border-[#292929]/30 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929]/30 mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] opacity-60 uppercase block mb-3 font-mono">
              02 / SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal">
              Featured <span className="italic opacity-80">Software Projects</span>
            </h2>
          </div>
          <p className="font-sans text-sm opacity-80 max-w-md leading-relaxed">
            A curated presentation of AI-assisted applications, emergency safety systems, and cybersecurity training platforms.
          </p>
        </div>

        {/* Asymmetrical Editorial Layouts */}
        <div className="flex flex-col gap-24">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.slug} className="border border-[#292929] bg-[#0A0A0A] p-6 md:p-10 rounded-lg">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  {/* Image Field */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                    <div className="relative aspect-[16/10] bg-transparent overflow-hidden rounded-md flex items-center justify-center">
                      <EditorialImage
                        src={project.coverImage.src}
                        alt={project.coverImage.alt}
                        titleText={project.name}
                        subtitleText={project.category}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  </div>

                  {/* Project Editorial Content */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="flex items-center gap-3 mb-4 font-mono text-xs tracking-[0.2em] uppercase opacity-60">
                      <span>PROJECT 0${index + 1}</span>
                      <span>/</span>
                      <span>{project.name}</span>
                    </div>

                    <h3 className="font-bisoca text-3xl md:text-4xl font-normal mb-4 leading-tight">
                      {project.name}
                    </h3>

                    <p className="font-sans text-sm opacity-80 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    <div className="mb-6 space-y-2">
                      <span className="text-[11px] uppercase tracking-[0.15em] opacity-60 font-semibold block mb-2 font-mono">
                        KEY CAPABILITIES
                      </span>
                      {project.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="text-xs opacity-80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-current rounded-full shrink-0 opacity-60" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="font-sans text-xs opacity-80 tracking-[0.1em] mb-8">
                      <span className="opacity-60 uppercase font-mono text-[10px] block mb-1">TECHNOLOGIES</span>
                      {project.technologies.join(' · ')}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] font-semibold border border-current px-5 py-2.5 hover:opacity-80 transition-opacity uppercase rounded-md"
                      >
                        <span>VIEW ARCHIVE</span>
                        <span>→</span>
                      </Link>

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] font-semibold bg-current text-background px-5 py-2.5 hover:opacity-90 transition-opacity uppercase rounded-md"
                        >
                          <span>OPEN LIVE SITE</span>
                          <span>↗</span>
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] font-semibold border border-current px-4 py-2.5 opacity-80 hover:opacity-100 transition-opacity uppercase rounded-md"
                        >
                          <span>OPEN GITHUB REPO</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
