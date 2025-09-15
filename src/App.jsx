import { useState } from 'react';
import { supabase } from './lib/supabase';

export default function App() {
  const [betaRequestSubmitted, setBetaRequestSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoLink, setDemoLink] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    experience: '',
    interest: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleBetaRequest = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Bitte fülle alle Pflichtfelder aus.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('beta_users')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          experience: formData.experience,
          interest: formData.interest
        }])
        .select('id, demo_token, email');

      if (error) {
        console.error('Supabase Fehler:', error);
        if (error.code === '23505') {
          alert('Diese E-Mail-Adresse wurde bereits registriert.');
        } else {
          throw error;
        }
        return;
      }

      const newUser = data[0];
      if (newUser && newUser.demo_token) {
        setDemoLink(`https://desktop-app-coaching.vercel.app?demo=${newUser.demo_token}`);
      }
      
      setBetaRequestSubmitted(true);
      
    } catch (error) {
      console.error('Fehler:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuche es später nochmal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-400">CoachingSpace</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollToSection('benefits')} className="text-slate-300 hover:text-white transition-colors">Vorteile</button>
              <button onClick={() => scrollToSection('beta-request')} className="text-slate-300 hover:text-white transition-colors">Beta</button>
            </div>
            <button 
              onClick={() => scrollToSection('beta-request')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Beta-Zugang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Die Zukunft des<br />Coachings ist da
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            CoachingSpace revolutioniert die Coaching-Branche durch <strong className="text-blue-400">triadische KI-Integration</strong>. 
            Erlebe personalisierte Coaching-Sessions, die sich an deine individuellen Bedürfnisse anpassen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('beta-request')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
            >
              Kostenlos testen
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionäre Features</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Entdecke die Kraft der triadischen KI-Integration für dein Coaching-Business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">KI-Persönlichkeitsanalyse</h3>
              <p className="text-slate-300 leading-relaxed">
                Unsere fortschrittliche KI analysiert Persönlichkeitstypen in Echtzeit und passt Coaching-Strategien automatisch an.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Triadische Sessions</h3>
              <p className="text-slate-300 leading-relaxed">
                Innovative 3-Parteien-Coaching-Sessions mit KI-Moderator für maximale Effizienz und Durchbrüche.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Echtzeit-Analytics</h3>
              <p className="text-slate-300 leading-relaxed">
                Detaillierte Fortschrittsanalysen und KI-generierte Insights für messbare Coaching-Erfolge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Warum <span className="text-blue-400">CoachingSpace?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">5x höhere Erfolgsrate</h3>
                    <p className="text-slate-300">Durch KI-optimierte Coaching-Strategien erreichen Klienten ihre Ziele deutlich schneller.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">Automatisierte Vorbereitung</h3>
                    <p className="text-slate-300">Die KI bereitet jede Session vor und schlägt optimale Coaching-Techniken vor.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Höhere Umsätze</h3>
                    <p className="text-slate-300">Coaches steigern ihre Einnahmen durch effizientere Sessions und zufriedenere Klienten.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-slate-700">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-2">92%</div>
                  <div className="text-xl text-slate-300 mb-6">der Beta-Tester sind begeistert</div>
                  <div className="bg-slate-800 rounded-xl p-6 text-left">
                    <p className="text-slate-300 italic mb-4">
                      "CoachingSpace hat meine Praxis revolutioniert. Die KI-Insights sind unglaublich präzise und meine Klienten erreichen ihre Ziele 3x schneller."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">SM</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Sarah Müller</div>
                        <div className="text-sm text-slate-400">Executive Coach, München</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Request Section */}
      <section id="beta-request" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Werde Beta-Tester</h2>
            <p className="text-xl text-slate-300">
              Erhalte sofortigen Zugang zur Beta-Version und einen personalisierten Demo-Link.
            </p>
          </div>

          {betaRequestSubmitted ? (
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold mb-4 text-green-400">Demo-Zugang erstellt!</h3>
              <p className="text-xl text-slate-300 mb-6">
                Danke <strong>{formData.firstName}</strong>! Dein persönlicher Demo-Zugang wurde erfolgreich erstellt.
              </p>
              
              {demoLink && (
                <div className="bg-slate-800 rounded-xl p-6 mb-6">
                  <p className="text-sm text-slate-400 mb-3">Dein persönlicher Demo-Link:</p>
                  <div className="bg-slate-700 rounded-lg p-3 mb-4">
                    <code className="text-blue-400 text-sm break-all">{demoLink}</code>
                  </div>
                  <a 
                    href={demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Demo jetzt starten →
                  </a>
                </div>
              )}
              
              <p className="text-sm text-slate-400">
                Du erhältst außerdem eine E-Mail mit weiteren Informationen und Updates zur Beta-Phase.
              </p>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Vorname *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Dein Vorname"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Nachname *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Dein Nachname"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-slate-300">E-Mail-Adresse *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="deine@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-slate-300">Unternehmen / Coaching-Praxis</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Name deiner Coaching-Praxis (optional)"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-slate-300">Coaching-Erfahrung</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  <option value="">Bitte wählen</option>
                  <option value="Neu im Coaching">Neu im Coaching</option>
                  <option value="< 1 Jahr">Weniger als 1 Jahr</option>
                  <option value="1-3 Jahre">1-3 Jahre</option>
                  <option value="3-5 Jahre">3-5 Jahre</option>
                  <option value="5-10 Jahre">5-10 Jahre</option>
                  <option value="10+ Jahre">Mehr als 10 Jahre</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Was interessiert dich am meisten an KI-gestütztem Coaching?
                </label>
                <textarea
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Erzähl uns kurz, was dich neugierig macht oder welche Herausforderungen du lösen möchtest..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                onClick={handleBetaRequest}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Erstelle Demo-Zugang...
                  </div>
                ) : (
                  'Kostenlosen Demo-Zugang anfordern'
                )}
              </button>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                * Pflichtfelder. Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">CoachingSpace</div>
              <p className="text-slate-400 max-w-md">
                Die Zukunft des Coachings durch triadische KI-Integration. 
                Revolutioniere deine Coaching-Praxis mit intelligenter Technologie.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produkt</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:text-white transition-colors">Vorteile</button></li>
                <li><button onClick={() => scrollToSection('beta-request')} className="hover:text-white transition-colors">Beta-Zugang</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 CoachingSpace. Alle Rechte vorbehalten. 
              <span className="text-blue-400 ml-2">Powered by triadischer KI-Technologie.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
