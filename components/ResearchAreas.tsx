'use client';

import { useEffect, useRef } from 'react';

const researchAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electric Vehicles',
    description: 'Research on EV powertrains, battery management systems, charging infrastructure, and vehicle-to-grid integration. We focus on developing efficient and cost-effective solutions for the Indian market.',
    color: 'royal',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Power Electronics',
    description: 'Advanced converter topologies, wide-bandgap semiconductors (SiC, GaN), and high-frequency power conversion. Our work spans from simulation to hardware prototyping.',
    color: 'cherry',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Renewable Energy',
    description: 'Solar PV systems, wind energy conversion, hybrid microgrids, and energy storage solutions. We explore grid integration challenges and smart energy management.',
    color: 'royal',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Motor Control & Drives',
    description: 'High-performance motor drives, sensorless control algorithms, and electric machine design. Focus on BLDC, PMSM, and induction motor applications.',
    color: 'cherry',
  },
];

export default function ResearchAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const cards = sectionRef.current.querySelectorAll('.research-card');
        cards.forEach((card, index) => {
          const speed = 0.05 + (index * 0.02);
          const yPos = (window.scrollY - rect.top - window.innerHeight) * speed;
          (card as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="research" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cherry font-semibold text-sm uppercase tracking-wider">Research</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Focus Areas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal to-cherry mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Our research spans across key domains in sustainable energy and electric mobility
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="research-card group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden will-change-transform"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color === 'royal' ? 'from-royal/5 to-cherry/5' : 'from-cherry/5 to-royal/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${area.color === 'royal' ? 'bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white' : 'bg-cherry/10 text-cherry group-hover:bg-cherry group-hover:text-white'} transition-all duration-300`}>
                  {area.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {area.description}
                </p>
                
                {/* Learn more link */}
                <a href="#contact" className={`inline-flex items-center mt-4 font-medium ${area.color === 'royal' ? 'text-royal' : 'text-cherry'} hover:underline`}>
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
