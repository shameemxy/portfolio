import React from 'react';

export const LabSection: React.FC = () => {
  const labItems = [
    {
      index: '01',
      title: 'AI PRODUCT BUILDING',
      subtitle: 'Applied Machine Intelligence',
      description: 'Continuing to design, prototype, and build AI-assisted applications that combine natural language interfaces, document parsing, image analysis, and automated triage into functional user experiences.',
      tags: ['Gemini API', 'LLM Integration', 'Prompt Engineering', 'AI Workflows'],
    },
    {
      index: '02',
      title: 'SYSTEMS AND ENGINEERING',
      subtitle: 'Core Architecture & Infrastructure',
      description: 'Going deeper into the underlying systems and software engineering principles beneath application layers—exploring database internals, networking, telemetry, offline alert protocols, and system reliability.',
      tags: ['DBMS Internals', 'Network Protocols', 'Telemetry Engine', 'Offline Systems'],
    },
    {
      index: '03',
      title: 'PRODUCT DEVELOPMENT',
      subtitle: 'Rapid Iteration & Deployment',
      description: 'Leveraging AI-assisted development tooling alongside rigorous code architecture to transform real-world problems into working software products quickly and effectively.',
      tags: ['Next.js', 'React Native', 'Full-Stack Integration', 'Rapid Prototyping'],
    },
  ];

  return (
    <section id="lab" className="py-24 border-b border-[#292929] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#292929] mb-16 gap-6">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#707070] uppercase block mb-3 font-mono">
              04 / EXPERIMENTAL LABORATORY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F3F3F0] font-normal">
              CURRENT FOCUS <span className="italic text-[#C8C8C2]">& LAB</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm text-[#A5A5A0] leading-relaxed mb-2">
              AI-assisted product building continues while deeper engineering knowledge is developed alongside it.
            </p>
            <span className="font-sans text-xs text-[#707070] tracking-[0.15em] uppercase font-mono">
              PARALLEL EVOLUTION: APPLIED AI + SYSTEMS UNDERSTANDING
            </span>
          </div>
        </div>

        {/* Focus Cards (Single Surface Dark Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labItems.map((item) => (
            <div
              key={item.index}
              className="border border-[#292929] bg-[#0A0A0A] p-8 rounded-lg flex flex-col justify-between hover:border-[#C8C8C2] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292929]">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#707070] uppercase">
                    LAB / {item.index}
                  </span>
                  <span className="w-2 h-2 bg-[#C8C8C2] rounded-full" />
                </div>

                <h3 className="font-bisoca text-2xl text-[#F3F3F0] font-normal mb-2 leading-snug">
                  {item.title}
                </h3>

                <span className="font-sans text-xs text-[#C8C8C2] tracking-[0.15em] uppercase block mb-4 font-medium">
                  {item.subtitle}
                </span>

                <p className="font-sans text-xs text-[#A5A5A0] leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Plain text metadata (NO tag boxes) */}
              <div className="pt-4 border-t border-[#151515] font-sans text-[11px] text-[#A5A5A0] tracking-[0.1em]">
                {item.tags.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
