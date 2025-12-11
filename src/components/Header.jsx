import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-black group transition-transform hover:scale-105">
            <span className="text-gray-900">Adelfors</span>
            <span className="bg-gradient-to-r from-accent-600 to-emerald-600 bg-clip-text text-transparent"> Consult</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#consulting" 
              className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors relative group"
            >
              Consulting
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#development" 
              className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors relative group"
            >
              Development
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#news" 
              className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors relative group"
            >
              News
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* Contact Button */}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/50 hover:scale-105"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-900 hover:text-accent-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200 animate-slide-down">
            <a href="#home" className="block py-3 px-4 text-gray-800 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition font-semibold">Home</a>
            <a href="#consulting" className="block py-3 px-4 text-gray-800 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition font-semibold">Consulting</a>
            <a href="#development" className="block py-3 px-4 text-gray-800 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition font-semibold">Development</a>
            <a href="#news" className="block py-3 px-4 text-gray-800 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition font-semibold">News</a>
            <a href="#testimonials" className="block py-3 px-4 text-gray-800 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition font-semibold">Testimonials</a>
            <a href="#contact" className="block py-3 px-4 bg-gradient-to-r from-accent-600 to-accent-500 text-white rounded-xl text-center font-bold">Kontakt</a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
