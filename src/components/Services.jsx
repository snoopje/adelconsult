import React from 'react'

const Services = () => {
  const services = [
    {
      id: 'consulting',
      title: 'Consulting',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'Unsere jahrzehntelange Erfahrung bildet die solide Grundlage für unsere Beratung zur Lösung anspruchsvoller Aufgaben in allen Bereichen Ihrer IT.',
      features: ['Systemarchitektur', 'HTML5/JavaScript', 'CMS Integration', 'Skalierbare Lösungen'],
      gradient: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-50/50 to-white',
      borderColor: 'border-accent-200',
      hoverBorder: 'hover:border-accent-400',
      textColor: 'text-accent-600',
      hoverText: 'hover:text-accent-700',
      shadowColor: 'shadow-accent-500/20'
    },
    {
      id: 'development',
      title: 'Development',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: 'Wir entwickeln plattformübergreifend, sodass unsere WEB- und MOBILE-Anwendungen plattformneutral sind.',
      features: ['Cross-Platform Entwicklung', 'REST & SOA Services', 'ORM & Datenbankdesign', 'Moderne Frameworks'],
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50/50 to-white',
      borderColor: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400',
      textColor: 'text-emerald-600',
      hoverText: 'hover:text-emerald-700',
      shadowColor: 'shadow-emerald-500/20'
    }
  ]

  return (
    <section id="consulting" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-50/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
            Unsere Services
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Was wir{' '}
            <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 bg-clip-text text-transparent">
              anbieten
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professionelle IT-Lösungen für nachhaltige und erfolgreiche Projekte weltweit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} ${service.hoverBorder} overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-4xl font-black text-gray-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-gray-200 transition-all">
                      <svg className={`w-5 h-5 flex-shrink-0 ${service.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center ${service.textColor} ${service.hoverText} font-bold transition group/link text-lg`}
                >
                  Mehr erfahren
                  <svg className={`w-6 h-6 ml-3 group-hover/link:translate-x-2 transition-transform ${service.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
