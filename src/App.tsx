import { useState } from 'react';

export default function App() {
  const [betaRequestSubmitted, setBetaRequestSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    experience: '',
    interest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBetaRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Validierung
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Bitte fülle alle Pflichtfelder aus.');
      return;
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    // Hier würdest du die Daten an dein Backend senden
    console.log('Beta-Anfrage:', formData);
    setBetaRequestSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-400">
              CoachingSpace
            </div>
            <button 
              onClick={() => document.getElementById('beta-request').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Beta-Zugang anfordern
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-slate-800 rounded-full px-4 py-2 mb-8">
            <span className="text-2xl mr-2">🧠</span>
            <span className="text-sm text-slate-300">Triadisches KI-Coaching</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Die Zukunft des Coachings
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            CoachingSpace revolutioniert die Coaching-Branche durch triadische KI-Integration. 
            Coach, Coachee und KI-Bot arbeiten strukturiert zusammen für nachhaltige Ergebnisse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('beta-request').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Beta-Zugang anfordern
            </button>
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="bg-slate-900 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">CoachingSpace Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-red-600 text-4xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">KI-Coaching aktiv</h4>
                  <p className="text-sm text-slate-300">Triadische Session mit Sarah M. läuft</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-700 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">12</div>
                    <div className="text-xs text-slate-400">Aktive Coachees</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">8</div>
                    <div className="text-xs text-slate-400">Sessions heute</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">94%</div>
                    <div className="text-xs text-slate-400">Erfolgsrate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KI-Coaching Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Triadisches KI-Coaching</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Revolutionärer 4-Phasen-Prozess: Coach und Coachee werden durch strukturierte KI-Unterstützung zu nachhaltigen Lösungen geführt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">4-Phasen-Prozess</h3>
              <p className="text-slate-300 mb-6">
                Strukturierter Coaching-Ablauf mit KI-gestützter Gesprächsführung für optimale Ergebnisse in jeder Session.
              </p>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-sm text-slate-300 space-y-1">
                  <div>• Problemdefinition</div>
                  <div>• Zielfindung</div>
                  <div>• Lösungsentwicklung</div>
                  <div>• Umsetzungsplanung</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Prompt-Bibliothek</h3>
              <p className="text-slate-300 mb-6">
                Umfangreiche Sammlung vorgefertigter Coaching-Aufträge und Gesprächsführungs-Prompts für effektive KI-gestützte Sessions.
              </p>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-sm text-slate-300 space-y-1">
                  <div>• Analyse von Widerständen</div>
                  <div>• Bild-Ziel-Analyse</div>
                  <div>• Erfolgsimagination entwickeln</div>
                  <div>• Weitere strukturierte Prompts...</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Video-Integration</h3>
              <p className="text-slate-300 mb-6">
                Coach und Coachee nutzen gemeinsam im Video-Call die KI-Unterstützung für transparente und effektive Sessions.
              </p>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-sm text-slate-300 space-y-1">
                  <div>• Screen-Sharing möglich</div>
                  <div>• Gemeinsame KI-Nutzung</div>
                  <div>• Session-Dokumentation</div>
                  <div>• Transparenter Prozess</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Komplette Coaching-Plattform</h2>
            <p className="text-xl text-slate-300">
              Alle Tools die du als Coach brauchst - in einer integrierten Lösung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Client Management</h3>
              <p className="text-slate-300">
                Verwalte alle deine Coachees professionell mit Kontaktdaten, Session-Historie und Fortschrittsdokumentation.
              </p>
            </div>

            <div className="bg-green-600/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Session Management</h3>
              <p className="text-slate-300">
                Terminplanung, Session-Notizen und Aufgaben-Tracking zwischen den Terminen - alles in einem System.
              </p>
            </div>

            <div className="bg-purple-600/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Business Analytics</h3>
              <p className="text-slate-300">
                Übersichtliches Dashboard mit KPIs, Rechnungsstellung und Finanzübersicht für deine Coaching-Praxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Request Form */}
      <section id="beta-request" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Beta-Zugang anfordern</h2>
            <p className="text-xl text-slate-300">
              Sei einer der ersten Coaches, die triadisches KI-Coaching erleben. 
              Wir erstellen dir einen personalisierten Beta-Zugang.
            </p>
          </div>

          {betaRequestSubmitted ? (
            <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Anfrage erhalten!</h3>
              <p className="text-slate-300 mb-6">
                Danke {formData.firstName}! Wir erstellen deinen personalisierten Beta-Zugang und melden uns binnen 24 Stunden mit den Zugangsdaten.
              </p>
              <p className="text-sm text-slate-400">
                Falls du Fragen hast, antworte einfach auf unsere E-Mail.
              </p>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Dein Vorname"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Dein Nachname"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="deine@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="company">
                  Unternehmen / Praxis
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Name deiner Coaching-Praxis"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="experience">
                  Coaching-Erfahrung
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Bitte wählen</option>
                  <option value="< 1 Jahr">Weniger als 1 Jahr</option>
                  <option value="1-3 Jahre">1-3 Jahre</option>
                  <option value="3-5 Jahre">3-5 Jahre</option>
                  <option value="5-10 Jahre">5-10 Jahre</option>
                  <option value="10+ Jahre">Mehr als 10 Jahre</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2" htmlFor="interest">
                  Was interessiert dich am meisten an KI-Coaching?
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Erzähl uns kurz, was dich neugierig macht auf triadisches KI-Coaching..."
                />
              </div>

              <button
                onClick={handleBetaRequest}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
              >
                Beta-Zugang anfordern
              </button>

              <p className="text-sm text-slate-400 mt-4 text-center">
                * Pflichtfelder. Wir erstellen dir binnen 24h einen personalisierten Zugang.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">
            CoachingSpace
          </div>
          <p className="text-slate-400">
            Die Zukunft des Coachings beginnt hier.
          </p>
        </div>
      </footer>
    </div>
  );
}
