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
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendWelcomeEmail = async (userData, demoToken) => {
    const demoUrl = `https://desktop-app-coaching.vercel.app?demo=${demoToken}`;
    setDemoLink(demoUrl);
    
    console.log('Welcome E-Mail würde gesendet werden:', {
      to: userData.email,
      subject: 'Dein CoachingSpace Demo-Zugang ist bereit!',
      demoLink: demoUrl,
      expiresIn: '30 Tage'
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
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            company: formData.company,
            experience: formData.experience,
            interest: formData.interest
          }
        ])
        .select('id, demo_token, email');

      if (error) {
        if (error.code === '23505') {
          alert('Diese E-Mail-Adresse wurde bereits für Beta-Zugang registriert.');
        } else {
          throw error;
        }
        return;
      }

      const newUser = data[0];
      await sendWelcomeEmail(newUser, newUser.demo_token);
      setBetaRequestSubmitted(true);
      console.log('Beta-User erfolgreich angelegt:', newUser);
      
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
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
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-400">
              CoachingSpace
            </div>
            <button 
              onClick={() => scrollToSection('beta-request')}
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
              onClick={() => scrollToSection('beta-request')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Beta-Zugang anfordern
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

      {/* Features sections... */}
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

      {/* Beta Request Form */}
      <section id="beta-request" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Beta-Zugang anfordern</h2>
            <p className="text-xl text-slate-300">
              Sei einer der ersten Coaches, die triadisches KI-Coaching erleben. 
              Du erhältst sofort einen personalisierten Demo-Zugang per E-Mail.
            </p>
          </div>

          {betaRequestSubmitted ? (
            <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Demo-Zugang erstellt!</h3>
              <p className="text-slate-300 mb-6">
                Danke {formData.firstName}! Dein persönlicher Demo-Zugang wurde erstellt.
              </p>
              
              {demoLink && (
                <div className="bg-slate-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-400 mb-2">Dein Demo-Link:</p>
                  <a 
                    href={demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 break-all text-sm"
                  >
                    {demoLink}
                  </a>
                  <p className="text-xs text-slate-500 mt-2">
                    Link ist 30 Tage gültig • Auch per E-Mail versendet
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Demo jetzt starten
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Dein Vorname"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Dein Nachname"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="deine@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Unternehmen / Praxis
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Name deiner Coaching-Praxis"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Coaching-Erfahrung
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  disabled={isSubmitting}
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
                <label className="block text-sm font-medium mb-2">
                  Was interessiert dich am meisten an KI-Coaching?
                </label>
                <textarea
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Erzähl uns kurz, was dich neugierig macht auf triadisches KI-Coaching..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                onClick={handleBetaRequest}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-colors"
              >
                {isSubmitting ? 'Erstelle Demo-Zugang...' : 'Demo-Zugang anfordern'}
              </button>

              <p className="text-sm text-slate-400 mt-4 text-center">
                * Pflichtfelder. Du erhältst sofort deinen personalisierten Demo-Link.
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
