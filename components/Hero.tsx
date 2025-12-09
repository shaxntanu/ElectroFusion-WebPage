'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-royal/5 to-cherry/10 dark:from-gray-900 dark:via-royal-dark/10 dark:to-cherry-dark/10">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-royal/10 rounded-full blur-2xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-cherry/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-royal/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-cherry/5 rounded-full blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-royal/10 dark:bg-royal/20 rounded-full mb-6">
              <span className="text-royal dark:text-royal-light font-medium text-sm">
                Thapar Institute of Engineering & Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="text-gradient">ElectroFusion</span>
              <br />
              Research Society
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Driving Innovation in Electric Mobility and Power Systems
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Join a community of passionate engineers and researchers dedicated to advancing sustainable energy solutions and electric vehicle technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-royal hover:bg-royal-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Join Us
              </a>
              <a
                href="#activities"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-royal dark:text-royal-light font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-royal/20 hover:border-cherry transition-all duration-300"
              >
                View Activities
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-cherry/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-tr from-cherry/30 to-royal/30 rounded-full blur-2xl" />
              
              {/* Main graphic container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* EV Icon */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="h-2 w-16 bg-gray-100 dark:bg-gray-600 rounded mt-2" />
                    </div>
                  </div>
                  
                  {/* Power Electronics */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cherry/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-cherry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <div className="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="h-2 w-20 bg-gray-100 dark:bg-gray-600 rounded mt-2" />
                    </div>
                  </div>
                  
                  {/* Renewable Energy */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="h-2 w-24 bg-gray-100 dark:bg-gray-600 rounded mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center text-gray-400 hover:text-royal transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
