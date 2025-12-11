import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I have worked with Raymond Treß during a number of years and mainly in one major project - the EU FP 7 -project myEcoCost. During our time and work together Raymond has proven himself to be a very capable software developer, problem solver and having great knowledge of different systems, concepts and development approaches existing in the rapid changing environment that the ICT world is today. I gladly recommend him as a software developer and problem solver and do not hesitate working with him in future projects.",
      author: "Sten Erik Björling",
      position: "CEO, Envirodata",
      location: "Sweden",
      avatar: "SE",
      rating: 5,
      color: "accent"
    },
    {
      quote: "The \"Omnis Technical Excellence of the Year\" award went to Raymond Treß of Ädelfors Consult who has been connected with Omnis for 30 years and never stops pushing Omnis to the limits, while motivating the Omnis development team to implement new and ground-breaking features. Raymond has always been one of the first to adopt new technologies and integrate them into his Omnis apps and to enter new markets.",
      author: "Birgit Jäger",
      position: "CEO, OMNIS Germany",
      location: "Germany",
      avatar: "BJ",
      rating: 5,
      color: "emerald"
    }
  ]

  const getColorClasses = (color) => {
    if (color === 'accent') {
      return {
        bg: 'from-accent-50/50 to-white',
        border: 'border-accent-200',
        corner: 'from-accent-100',
        star: 'text-accent-500',
        avatar: 'from-accent-500 to-accent-600',
        location: 'text-accent-600'
      }
    }
    return {
      bg: 'from-emerald-50/50 to-white',
      border: 'border-emerald-200',
      corner: 'from-emerald-100',
      star: 'text-emerald-500',
      avatar: 'from-emerald-500 to-emerald-600',
      location: 'text-emerald-600'
    }
  }

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-50/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
              Testimonials
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Was unsere{' '}
              <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 bg-clip-text text-transparent">
                Kunden
              </span>{' '}
              sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vertrauen und Exzellenz in jedem Projekt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const colors = getColorClasses(testimonial.color)
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${colors.bg} p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${colors.border} hover:border-gray-300 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colors.corner} to-transparent rounded-bl-full opacity-50`}></div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className={`w-6 h-6 ${colors.star}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-10">
                      <svg className={`w-12 h-12 ${colors.star} mb-6 opacity-30`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-5 pt-8 border-t-2 border-gray-200">
                      <div className={`w-20 h-20 bg-gradient-to-br ${colors.avatar} rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-black text-gray-900 text-lg">{testimonial.author}</p>
                        <p className="text-sm text-gray-600 mt-1">{testimonial.position}</p>
                        <p className={`text-xs ${colors.location} font-bold uppercase tracking-wider mt-2`}>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
