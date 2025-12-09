'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const yPos = -(scrolled - elementTop) * speed;
        sectionRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
