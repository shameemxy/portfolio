import React from 'react';

export const ComingSoon: React.FC = () => {
  const futureItems = [
    {
      code: 'SYS-01',
      category: 'SYSTEMS',
      title: 'Distributed Infrastructure & Offline Protocols',
      description: 'Exploring low-latency networking, mesh communication, and resilient offline alert routing for critical safety software.',
    },
    {
      code: 'AI-02',
      category: 'INTELLIGENCE',
      title: 'Contextual AI & On-Device Triage',
      description: 'Investigating small-footprint language models and edge computing for real-time risk classification and local decision-making.',
    },
    {
      code: 'PRD-03',
      category: 'PRODUCTS',
      title: 'Refined Developer & Productivity Tools',
      description: 'Transforming technical experiments into production-grade developer utilities and high-efficiency workflow applications.',
    },
    {
      code: 'FUT-04',
      category: 'MORE',
      title: 'Unannounced Software Initiatives',
      description: 'Future projects, technical milestones, and new software explorations will be published here as they achieve operational status.',
    },
  ];

  return (
    <section className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              06 / FUTURE HORIZONS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F3F3F0] font-normal">
              COMING <span className="italic text-[#C8C8C2]">SOON</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A5A5A0] max-w-md leading-relaxed">
            Ongoing research and planned product directions. Active development continues across these vector spaces.
          </p>
        </div>

        {/* Future Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureItems.map((item) => (
            <div
              key={item.code}
              className="border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg flex flex-col justify-between hover:border-[#C8C8C2] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#151515]">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#707070] uppercase">
                    {item.code}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#C8C8C2] bg-[#151515] px-2 py-0.5 border border-[#292929] uppercase rounded-sm">
                    IN DEVELOPMENT
                  </span>
                </div>

                <h3 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#A5A5A0] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#151515] flex items-center justify-between text-[11px] text-[#707070] uppercase tracking-[0.15em] font-mono">
                <span>VECTOR: {item.category}</span>
                <span>STATUS: QUEUED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
