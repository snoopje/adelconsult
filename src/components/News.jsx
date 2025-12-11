import React from 'react'

const News = () => {
  const newsItems = [
    {
      title: "Germany leading in IT freelancer – business",
      date: "3 Jun 2024",
      excerpt: "Germany has an unusually high proportion of developers working part-time. Developers in the industry are increasingly choosing flexible work arrangements...",
      icon: "📊",
      category: "Industry",
      color: "accent"
    },
    {
      title: "OMNIS Media Management & AI via REST API",
      excerpt: "Using OMNIS, a cross platform development system, to access Digital Media Management systems through modern REST API integrations...",
      icon: "🤖",
      category: "Technology",
      color: "emerald"
    },
    {
      title: "WordPress for OMNIS",
      excerpt: "Access and control of the WordPress infrastructure. Create/Read/Update/Delete Pages, Posts and manage content seamlessly from OMNIS applications...",
      icon: "🔌",
      category: "Integration",
      color: "accent"
    },
    {
      title: "Another success at the yearly OMNIS Conference",
      excerpt: "Ray talked about using RESTful / JSON technics to bring different applications together under one unified system architecture...",
      icon: "🎉",
      category: "Events",
      color: "emerald"
    }
  ]

  const getColorClasses = (color) => {
    if (color === 'accent') {
      return {
        badge: 'bg-accent-100 text-accent-800 border-accent-200',
        date: 'text-accent-600',
        link: 'text-accent-600 hover:text-accent-700'
      }
    }
    return {
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      date: 'text-emerald-600',
      link: 'text-emerald-600 hover:text-emerald-700'
    }
  }

  return (
    <section id="news" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Aktuelles
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 bg-clip-text text-transparent">News</span>{' '}
              & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => {
              const colors = getColorClasses(item.color)
              return (
                <article
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gray-200 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <span className={`px-4 py-1.5 ${colors.badge} rounded-full text-xs font-bold border`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    {item.date && (
                      <time className={`text-xs ${colors.date} font-bold uppercase tracking-wider mb-4 block`}>
                        {item.date}
                      </time>
                    )}
                    <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <a
                    href="#"
                    className={`inline-flex items-center ${colors.link} text-sm font-bold transition group/link`}
                  >
                    Weiterlesen
                    <svg className={`w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </article>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300"
            >
              Alle Posts anzeigen
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
