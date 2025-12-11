import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Kontakt
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Lassen Sie uns{' '}
              <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 bg-clip-text text-transparent">
                zusammenarbeiten
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Nachricht und helfen Ihnen gerne weiter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-8">Kontaktinformationen</h3>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 mb-2 text-xl">Adresse</p>
                      <p className="text-gray-600 leading-relaxed text-lg">Malmvägen 1<br />57454 Ädelfors, Sweden</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 mb-2 text-xl">Telefon</p>
                      <p className="text-gray-600 text-xl">+46-767763600</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-10 border-t-2 border-gray-200">
                <p className="text-sm font-black text-gray-600 mb-6 uppercase tracking-wider">Warum uns wählen?</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-accent-200 transition-all">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-bold text-lg">30+ Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-emerald-200 transition-all">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-bold text-lg">Weltweite Projekte</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-accent-200 transition-all">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-bold text-lg">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition text-lg font-medium hover:border-gray-300"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition text-lg font-medium hover:border-gray-300"
                    placeholder="ihre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition resize-none text-lg font-medium hover:border-gray-300"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Nachricht senden
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
