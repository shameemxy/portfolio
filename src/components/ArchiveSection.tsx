import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export const ArchiveSection: React.FC = () => {
  return (
    <section id="archive" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              03 / FULL CATALOG
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F3F3F0] font-normal">
              ARCHIVE
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A5A5A0] max-w-md leading-relaxed">
            The complete body of software projects engineered by Shameem, spanning AI skincare, emergency SOS mobile platforms, cybersecurity phishing simulations, fitness intelligence, school management systems, and DBMS civic complaint tools.
          </p>
        </div>

        {/* 3-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
