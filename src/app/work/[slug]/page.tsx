import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';
import { DepthCarousel } from '@/components/DepthCarousel';

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-transparent pt-12 pb-24">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#292929]">
          <Link
            href="/#archive"
            className="font-sans text-xs tracking-[0.2em] uppercase text-[#A5A5A0] hover:text-[#F3F3F0] transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>BACK TO ARCHIVE</span>
          </Link>
          <span className="font-sans text-xs text-[#707070] tracking-[0.15em] uppercase font-mono">
            CATALOG ITEM 0{projectIndex + 1} / 06
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#707070] uppercase">
              <span style={{ color: project.accent }}>{project.category}</span>
              <span>/</span>
              <span>{project.slug}</span>
            </div>

            {/* Project Title — BISOCA FONT */}
            <h1 className="font-bisoca text-4xl md:text-6xl text-[#F3F3F0] font-normal mb-6 leading-tight">
              {project.name}
            </h1>

            <p className="font-sans text-lg text-[#A5A5A0] leading-relaxed max-w-3xl font-normal">
              {project.longDescription}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            {/* Single Surface Sidebar Box */}
            <div className="border border-[#292929] bg-[#0A0A0A] p-6 space-y-4 rounded-lg">
              <div>
                <span className="text-[10px] text-[#707070] uppercase tracking-[0.2em] block mb-2 font-mono">
                  TECHNOLOGY STACK
                </span>
                {/* PLAIN TEXT METADATA */}
                <div className="font-sans text-xs text-[#F3F3F0] tracking-[0.1em]">
                  {project.technologies.join(' · ')}
                </div>
              </div>

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block font-sans text-xs tracking-[0.2em] font-semibold text-[#0A0A0A] bg-[#F3F3F0] py-2.5 uppercase rounded-md hover:bg-[#C8C8C2] transition-colors"
                >
                  OPEN LIVE SITE ↗
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block font-sans text-xs tracking-[0.2em] font-semibold text-[#F3F3F0] border border-[#292929] py-2.5 uppercase hover:border-[#C8C8C2] transition-colors rounded-md"
                >
                  OPEN GITHUB REPO ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive 3D Depth Carousel Screenshot Presentation */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="pb-6 border-b border-[#292929] mb-8 flex items-center justify-between">
          <div>
            <span className="font-sans text-xs tracking-[0.2em] text-[#707070] uppercase block mb-1 font-mono">
              EXHIBITION GALLERY
            </span>
            <h2 className="font-serif text-2xl text-[#F3F3F0]">
              Interface & System Visuals
            </h2>
          </div>
          <span className="font-sans text-xs text-[#707070] uppercase font-mono">
            {project.screenshots.length} SCREENSHOT ASSETS
          </span>
        </div>

        {/* Depth Carousel Component */}
        <DepthCarousel screenshots={project.screenshots} />
      </div>

      {/* Capabilities & Prototype Status */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Capabilities */}
          <div className="lg:col-span-6 border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg">
            <h2 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-6">
              Core Capabilities
            </h2>
            <ul className="space-y-4">
              {project.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#A5A5A0]">
                  <span className="w-1.5 h-1.5 bg-[#C8C8C2] mt-2 shrink-0 rounded-full" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: State & Future Direction */}
          <div className="lg:col-span-6 space-y-8">
            {/* CURRENT PROTOTYPE SECTION */}
            <div className="border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-[#C8C8C2] rounded-full" />
                <h3 className="font-sans text-xs tracking-[0.2em] text-[#F3F3F0] uppercase font-bold font-mono">
                  CURRENT PROTOTYPE
                </h3>
              </div>
              <p className="font-sans text-sm text-[#A5A5A0] leading-relaxed">
                {project.currentState}
              </p>
            </div>

            {/* FUTURE DIRECTION SECTION */}
            {project.futureDirection && (
              <div className="border border-[#292929] bg-[#0A0A0A] p-8 border-l-2 border-l-[#E63946] rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-[#E63946] rounded-full" />
                  <h3 className="font-sans text-xs tracking-[0.2em] text-[#E63946] uppercase font-bold font-mono">
                    PLANNED FUTURE DIRECTION
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#A5A5A0] leading-relaxed">
                  {project.futureDirection}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Next / Prev Project Pagination */}
      <div className="max-w-7xl mx-auto px-6 border-t border-[#292929] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/work/${prevProject.slug}`}
            className="border border-[#292929] bg-[#0A0A0A] p-6 hover:border-[#C8C8C2] transition-colors group rounded-lg"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#707070] uppercase block mb-2">
              ← PREVIOUS PROJECT
            </span>
            <span className="font-bisoca text-xl text-[#F3F3F0] group-hover:text-[#C8C8C2] transition-colors">
              {prevProject.name}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="border border-[#292929] bg-[#0A0A0A] p-6 hover:border-[#C8C8C2] transition-colors text-right group rounded-lg"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#707070] uppercase block mb-2">
              NEXT PROJECT →
            </span>
            <span className="font-bisoca text-xl text-[#F3F3F0] group-hover:text-[#C8C8C2] transition-colors">
              {nextProject.name}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
