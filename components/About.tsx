const focusAreas = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electric Vehicles',
    description: 'Design and development of EV powertrains and charging systems',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Power Electronics',
    description: 'Advanced converter topologies and control strategies',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Renewable Energy',
    description: 'Solar, wind, and hybrid energy system integration',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Motor Control & Drives',
    description: 'High-performance motor drives and control algorithms',
  },
];

'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const cards = sectionRef.current.querySelectorAll('.parallax-card');
        cards.forEach((card, index) => {
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrolled - rect.top) * speed;
          (card as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cherry font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal to-cherry mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="parallax-card bg-gradient-to-br from-royal/5 to-cherry/5 dark:from-royal/10 dark:to-cherry/10 rounded-2xl p-8 will-change-transform">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-10 h-10 bg-royal/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ElectroFusion Research Society is dedicated to fostering innovation and research excellence in the fields of electric mobility, power systems, and sustainable energy. We aim to bridge the gap between academic knowledge and real-world applications through hands-on projects and industry collaboration.
              </p>
            </div>

            <div className="parallax-card bg-gradient-to-br from-cherry/5 to-royal/5 dark:from-cherry/10 dark:to-royal/10 rounded-2xl p-8 will-change-transform">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-10 h-10 bg-cherry/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-cherry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a leading student-driven research community that contributes meaningfully to India&apos;s transition towards sustainable transportation and clean energy, while nurturing the next generation of engineers and innovators.
              </p>
            </div>

            {/* Faculty Advisor Note */}
            <div className="parallax-card bg-royal dark:bg-royal-dark rounded-2xl p-6 text-white will-change-transform">
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Faculty Guidance
              </h4>
              <p className="text-white/90 text-sm">
                Under the mentorship of our faculty advisor, we receive academic guidance, research direction, and support in establishing industry connections to ensure our projects meet professional standards.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Focus Areas</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-cherry/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-royal/10 to-cherry/10 rounded-xl flex items-center justify-center mb-4 text-royal group-hover:text-cherry transition-colors">
                    {area.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
