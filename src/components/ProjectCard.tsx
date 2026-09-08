'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { EditorialImage } from './EditorialImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article className="group border border-[#292929] bg-[#0A0A0A] p-6 flex flex-col justify-between hover:border-[#C8C8C2] transition-colors rounded-lg overflow-hidden">
      <div>
        {/* Cover Preview Image Field — NO Inner Frame */}
        <div className="relative aspect-[16/9] bg-transparent overflow-hidden mb-6 flex items-center justify-center rounded-md">
          <EditorialImage
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            titleText={project.name}
            subtitleText={project.category}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Plain Top Notation */}
        <div className="flex items-center gap-3 mb-3 font-mono text-[11px] tracking-[0.2em] text-[#707070] uppercase">
          <span>0{index + 1} / ARCHIVE</span>
          <span>/</span>
          <span className="text-[#A5A5A0]">{project.category}</span>
        </div>

        {/* Card Title — BISOCA FONT */}
        <h3 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-3 leading-snug">
          {project.name}
        </h3>

        <p className="font-sans text-xs text-[#A5A5A0] leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      <div>
        {/* Technology Metadata — PLAIN TEXT */}
        <div className="font-sans text-[11px] text-[#A5A5A0] tracking-[0.1em] mb-6 font-normal">
          {project.technologies.slice(0, 4).join(' · ')}
        </div>

        {/* Action Links */}
        <div className="space-y-2">
          <Link
            href={`/work/${project.slug}`}
            className="w-full flex items-center justify-between font-sans text-xs tracking-[0.15em] font-semibold text-[#F3F3F0] border border-[#292929] px-4 py-2 hover:border-[#C8C8C2] transition-colors uppercase rounded-md"
          >
            <span>EXPLORE ARCHIVE</span>
            <span>→</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-sans text-[10px] tracking-[0.15em] font-semibold text-[#0A0A0A] bg-[#F3F3F0] py-1.5 uppercase rounded-md hover:bg-[#C8C8C2] transition-colors"
              >
                OPEN LIVE SITE ↗
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-sans text-[10px] tracking-[0.15em] font-semibold text-[#A5A5A0] border border-[#292929] py-1.5 uppercase rounded-md hover:text-[#F3F3F0] hover:border-[#C8C8C2] transition-colors"
              >
                OPEN GITHUB REPO ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
