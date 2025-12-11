import React from 'react'
import heroImage from '../../assets/IMG_1666.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        ></div>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        {/* Additional subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 via-transparent to-emerald-900/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-2xl mb-8 animate-slide-down">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-900">30+ Jahre Erfahrung in IT-Beratung</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-3 drop-shadow-lg">Adelfors</span>
              <span className="block bg-gradient-to-r from-accent-400 via-accent-300 to-emerald-400 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-lg">
                Consult
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto font-medium text-balance drop-shadow-md">
              Eine einzigartige IT-Beratung mit mehr als 30 Jahren Erfahrung in skalierbaren{' '}
              <span className="font-bold text-white">WEB & MOBILE</span> Anwendungsentwicklung weltweit.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <a
                href="#consulting"
                className="group relative px-10 py-5 bg-gradient-to-r from-accent-600 to-accent-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/50 hover:scale-105 min-w-[220px] text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Consulting starten
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="#development"
                className="group px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 hover:border-accent-500 hover:text-accent-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[220px] text-center flex items-center justify-center gap-2"
              >
                Details erfahren
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">30+</div>
                <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">100+</div>
                <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">50+</div>
                <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-3 bg-gradient-to-b from-accent-400 to-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
