import React from 'react';

export const StorySection: React.FC = () => {
  const chapters = [
    {
      step: '01',
      title: 'THE BEGINNING',
      subtitle: 'From Concepts to Execution',
      body: 'Learning the fundamentals of computer science and software development—turning initial ideas into functional codebase structures and learning how software interacts with human users.',
    },
    {
      step: '02',
      title: 'THE EXPERIMENTATION',
      subtitle: 'Broad Problem Exploration',
      body: 'Exploring diverse domains including AI-driven skincare analysis, mobile emergency SOS systems, email cybersecurity simulations, fitness tracking, school management, and municipal civic complaint platforms.',
    },
    {
      step: '03',
      title: 'THE BUILDER',
      subtitle: 'Shipping Integrated Products',
      body: 'Focusing on rapid execution and real-world utility—connecting responsive user interfaces with backend databases, authentication frameworks, telemetry engines, and generative AI APIs.',
    },
    {
      step: '04',
      title: 'THE NEXT CHAPTER',
      subtitle: 'Engineering Depth & Future Systems',
      body: 'Advancing deeper into software systems, network reliability, and underlying engineering principles while continuing to rapidly prototype and ship software products with modern AI tools.',
    },
  ];

  return (
    <section id="story" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              05 / CHRONICLE
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F3F3F0] font-normal">
              STORY <span className="italic text-[#C8C8C2]">& PROGRESSION</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A5A5A0] max-w-md leading-relaxed">
            The narrative of an evolving software builder—progressing from foundational code experiments to complete applications and systems engineering.
          </p>
        </div>

        {/* Chapters Vertical Timeline */}
        <div className="space-y-8">
          {chapters.map((chap) => (
            <div
              key={chap.step}
              className="border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:border-[#C8C8C2] transition-colors"
            >
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-serif text-3xl text-[#C8C8C2] font-semibold">{chap.step}</span>
                <span className="w-8 h-[1px] bg-[#292929]" />
              </div>

              <div className="md:col-span-4">
                <h3 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-1">
                  {chap.title}
                </h3>
                <span className="font-mono text-xs text-[#707070] uppercase tracking-[0.15em]">
                  {chap.subtitle}
                </span>
              </div>

              <div className="md:col-span-6">
                <p className="font-sans text-xs md:text-sm text-[#A5A5A0] leading-relaxed">
                  {chap.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
