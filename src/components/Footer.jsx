import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16 pt-16">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-black mb-6">
              <span className="text-white">Adelfors</span>
              <span className="bg-gradient-to-r from-accent-400 via-accent-300 to-emerald-400 bg-clip-text text-transparent"> Consult AB</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              for sustainable and successful IT projects.
            </p>
            <p className="text-gray-400 leading-relaxed">
              PASSIONATE IT - ADDICTS who specialize in software development for WEB and Mobile devices with more than 30 years experience in IT projects with customers around the globe.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-black mb-8 text-white">Kontakt</h4>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-white mb-2">Adresse</p>
                  <p className="text-gray-300">Malmvägen 1<br />57454 Ädelfors, Sweden</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-white mb-2">Telefon</p>
                  <p className="text-gray-300 text-lg">+46-767763600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-black mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#consulting" className="text-gray-300 hover:text-accent-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  Consulting
                </a>
              </li>
              <li>
                <a href="#development" className="text-gray-300 hover:text-emerald-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  Development
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-accent-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  News
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent-400 transition flex items-center group font-bold text-lg">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © Copyright 2025 • Designed by Raymond Treß • Proudly Powered by Ädelfors Consult AB
            </p>
            <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-accent-900/50 to-emerald-900/50 rounded-full border border-gray-800">
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></span>
              <span className="text-gray-300 font-bold">Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
