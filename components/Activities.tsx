'use client';

import { useEffect, useRef } from 'react';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  tag: string;
  isPast?: boolean;
}

function EventCard({ date, title, description, tag, isPast }: EventCardProps) {
  const tagColors: Record<string, string> = {
    Workshop: 'bg-royal/10 text-royal dark:bg-royal/20',
    Talk: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Hackathon: 'bg-cherry/10 text-cherry dark:bg-cherry/20',
    Competition: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    Seminar: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  };

  return (
    <div className={`event-card group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 will-change-transform ${isPast ? 'opacity-80' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}>
          {tag}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

const upcomingEvents = [
  { date: 'Jan 15, 2025', title: 'EV Powertrain Design Workshop', description: 'Hands-on session on designing efficient electric vehicle powertrains with industry experts.', tag: 'Workshop' },
  { date: 'Jan 28, 2025', title: 'Renewable Energy Integration Seminar', description: 'Expert talk on integrating solar and wind energy into modern power grids.', tag: 'Seminar' },
  { date: 'Feb 10-12, 2025', title: 'ElectroHack 2025', description: '48-hour hackathon focused on sustainable mobility solutions and smart grid technologies.', tag: 'Hackathon' },
];

const pastEvents = [
  { date: 'Dec 5, 2024', title: 'Power Electronics Fundamentals', description: 'Introduction to converter topologies and control strategies for beginners.', tag: 'Workshop' },
  { date: 'Nov 20, 2024', title: 'Industry Expert Talk: Tesla Engineering', description: 'Guest lecture on EV battery management systems and thermal design.', tag: 'Talk' },
  { date: 'Nov 8, 2024', title: 'Motor Control Competition', description: 'Inter-college competition on BLDC motor control algorithm optimization.', tag: 'Competition' },
  { date: 'Oct 15, 2024', title: 'Solar PV System Design', description: 'Workshop on designing and sizing solar photovoltaic systems for residential use.', tag: 'Workshop' },
];

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const cards = sectionRef.current.querySelectorAll('.event-card');
        cards.forEach((card, index) => {
          const speed = 0.04 + (index * 0.015);
          const yPos = (window.scrollY - rect.top - window.innerHeight) * speed;
          (card as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="activities" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cherry font-semibold text-sm uppercase tracking-wider">Events</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Activities & Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal to-cherry mx-auto rounded-full" />
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Past Events Timeline */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-gray-400 rounded-full mr-3" />
            Past Events
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal via-cherry to-royal/30 hidden md:block" />
            
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="md:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-6 w-3 h-3 bg-royal rounded-full border-2 border-white dark:border-gray-900 hidden md:block" />
                  <EventCard {...event} isPast />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YouTube Embed Placeholder */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Featured Content
          </h3>
          <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <p>YouTube Video Embed Placeholder</p>
              <p className="text-sm mt-1">Replace with actual embed code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
