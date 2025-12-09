interface LeaderCardProps {
  name: string;
  position: string;
  description: string;
  linkedin?: string;
  github?: string;
  isHighlighted?: boolean;
}

function LeaderCard({ name, position, description, linkedin, github, isHighlighted }: LeaderCardProps) {
  return (
    <div
      className={`leader-card group relative bg-royal dark:bg-royal-dark rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl will-change-transform ${
        isHighlighted ? 'ring-4 ring-cherry/50' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cherry/0 to-cherry/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        {/* Photo Placeholder */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <svg className="w-12 h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        
        <div className="text-center">
          <h4 className="font-bold text-lg mb-1">{name}</h4>
          <p className="text-cherry-light font-medium text-sm mb-2">{position}</p>
          <p className="text-white/80 text-sm mb-4">{description}</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label={`${name}'s GitHub profile`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const leadershipData = {
  facultyAdvisor: {
    name: 'Dr. Rajesh M. Pindoriya',
    position: 'Faculty Advisor',
    description: 'Guiding research direction and academic excellence',
    linkedin: '#',
  },
  vicePresident: {
    name: 'Dr. Shireesh Kumar Rai',
    position: 'Vice President, ElectroFusion',
    description: 'Coordinating projects and team management',
    linkedin: '#',
  },
  generalSecretary: {
    name: 'Aashirwaad Tripathi',
    position: 'General Secretary',
    description: 'Electrical Engineering, Third Year',
    linkedin: '#',
  },
  secretaries: [
    { name: 'Sakshyam Aryal', position: 'Joint Secretary', description: 'Biomedical Engineering, Second Year', linkedin: '#' },
    { name: 'Ronak Patidar', position: 'Joint Secretary', description: 'Electrical & Communication Engineering, Third Year', linkedin: '#' },
    { name: 'Parul Goel', position: 'Joint Secretary', description: 'Electrical Engineering, Third Year', linkedin: '#' },
    { name: 'Anjali Goyal', position: 'Joint Secretary', description: 'Bio-Physics (TSLAS), Third Year', linkedin: '#' },
    { name: 'Parul Goel', position: 'Joint Secretary', description: 'Computer Science, Second Year', linkedin: '#' },
    { name: 'Khushi Gupta', position: 'Finance Secretary', description: 'Electronics and Communication Engineering, Third Year', linkedin: '#' },
  ],
  coreMembers: [
    { name: 'Shivansih Singh', position: 'Core Member', description: 'AI/ML, Second Year', linkedin: '#' },
    { name: 'Harsh Singh Chahar', position: 'Core Member', description: 'Electronics & Communication Engineering, Second Year', linkedin: '#' },
    { name: 'Hardik Sher Singh', position: 'Core Member', description: 'Electrical & Communication Engineering, Third Year', linkedin: '#' },
    { name: 'Shivansh Gangwar', position: 'Core Member', description: 'Electrical Engineering, Third Year', linkedin: '#' },
    { name: 'Marya Jindal', position: 'Core Member', description: 'Computer Science and Engineering, Third Year', linkedin: '#' },
    { name: 'Lavya Lamba', position: 'Core Member', description: 'Electrical & Communication Engineering, Third Year', linkedin: '#' },
    { name: 'Vaibhav Nagpal', position: 'Core Member', description: 'Electronics & Communication Engineering, Third Year', linkedin: '#' },
  ],
  executiveMembers: [
    { name: 'Shantanu', position: 'Executive Member', description: 'Electrical Engineering, First Year', linkedin: '#' },
    { name: 'Sidharth Arora', position: 'Executive Member', description: 'Electronics and Computers, First Year', linkedin: '#' },
    { name: 'Arjun Goenawat', position: 'Executive Member', description: 'Electronics and Computers, First Year', linkedin: '#' },
    { name: 'Anshman Anand', position: 'Executive Member', description: 'Electronics and Computers, First Year', linkedin: '#' },
    { name: 'RIDDHI KATYAL', position: 'Executive Member', description: 'Electronics and Communication (Design), First Year', linkedin: '#' },
    { name: 'Ashim Kapoor', position: 'Executive Member', description: 'Electronics and Communication Engineering, First Year', linkedin: '#' },
    { name: 'Saranyan Jain', position: 'Executive Member', description: 'Electronics and Communication Engineering, First Year', linkedin: '#' },
    { name: 'Dhruv Sharma', position: 'Executive Member', description: 'Electronics and Communication Engineering, First Year', linkedin: '#' },
    { name: 'Hridayansj Singh', position: 'Executive Member', description: 'Computer Engineering, First Year', linkedin: '#' },
    { name: 'Aadi Gupta', position: 'Executive Member', description: 'Computer Science and Engineering, First Year', linkedin: '#' },
    { name: 'Tanvi Gupta', position: 'Executive Member', description: 'Computer Science and Engineering, First Year', linkedin: '#' },
    { name: 'Arka Narayan', position: 'Executive Member', description: 'Computer Science and Engineering, First Year', linkedin: '#' },
    { name: 'Uddish Nair', position: 'Executive Member', description: 'Mechatronics Engineering, First Year', linkedin: '#' },
    { name: 'Kashley Mishra', position: 'Executive Member', description: 'Biotechnology, First Year', linkedin: '#' },
    { name: 'Karan', position: 'Executive Member', description: 'Mechanical Engineering, First Year', linkedin: '#' },
    { name: 'Aman Tyagi', position: 'Executive Member', description: 'Electrical Engineering, First Year', linkedin: '#' },
    { name: 'Gunaveer Singh', position: 'Executive Member', description: '(BLAS) TSLAS, First Year', linkedin: '#' },
  ],
};

'use client';

import { useEffect, useRef } from 'react';

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const cards = sectionRef.current.querySelectorAll('.leader-card');
        cards.forEach((card, index) => {
          const speed = 0.03 + (index * 0.01);
          const yPos = (window.scrollY - rect.top - window.innerHeight) * speed;
          (card as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="leadership" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cherry font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Leadership Hierarchy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal to-cherry mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the dedicated team driving innovation and excellence at ElectroFusion
          </p>
        </div>

        {/* Hierarchy Structure */}
        <div className="space-y-8">
          {/* Faculty Advisor */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <LeaderCard {...leadershipData.facultyAdvisor} isHighlighted />
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-royal to-cherry" />
          </div>

          {/* Vice President */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <LeaderCard {...leadershipData.vicePresident} isHighlighted />
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-royal to-cherry" />
          </div>

          {/* General Secretary */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <LeaderCard {...leadershipData.generalSecretary} />
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-royal to-cherry" />
          </div>

          {/* Secretaries */}
          <div>
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Secretaries
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {leadershipData.secretaries.map((member, index) => (
                <LeaderCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Connecting Lines to Core Members */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-royal to-cherry" />
          </div>

          {/* Core Members */}
          <div>
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Core Members
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipData.coreMembers.map((member, index) => (
                <LeaderCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Executive Members */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Executive Members
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {leadershipData.executiveMembers.map((member, index) => (
                <LeaderCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
