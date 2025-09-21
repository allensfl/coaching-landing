import { useState } from 'react';
import { CheckCircle, Users, Calendar, Brain, Shield, Star, Clock, ArrowRight, Zap } from 'lucide-react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experience: '',
    coachingType: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.experience) {
      setSubmitted(true);
      // Hier würdest du die Daten an dein Backend/Supabase senden
      console.log('Beta-Anmeldung:', formData);
    } else {
      alert('Bitte alle Pflichtfelder ausfüllen');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-green-400 mb-4">
              Willkommen im Beta-Programm!
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Danke {formData.firstName}! Du bist jetzt auf der Beta-Liste.
            </p>
            <div className="bg-slate-800 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-white mb-3">Was passiert als Nächstes?</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Du erhältst eine Bestätigungs-E-Mail in den nächsten Minuten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Beta-Zugang wird in 1-2 Wochen freigeschaltet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>3 Monate kostenlosen Vollzugang (Wert: 177€)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Exklusiver Discord-Zugang zur Beta-Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Limitiert auf 100 Beta-Tester</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">CoachingSpace</span>
              <br />
              <span className="text-white">Beta-Programm</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Sei einer der ersten 100 Coaches, die unsere KI-gestützte Coaching-Plattform testen. 
              3 Monate kostenlos - alle Premium-Features inklusive.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Beta startet Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Bereits 23 auf der Warteliste</span>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <Brain className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">KI-Assistent</h3>
              <p className="text-sm text-slate-400">Triadisches 12-Schritte-Coaching mit intelligenter Sessionplanung</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">DSGVO-konform</h3>
              <p className="text-sm text-slate-400">Lokale Datenspeicherung und automatische Compliance-Features</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <Zap className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Vollautomatisiert</h3>
              <p className="text-sm text-slate-400">Von Session-Notizen bis Rechnungsstellung - alles in einer App</p>
            </div>
          </div>
        </div>
      </div>

      {/* Beta Form */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Jetzt für Beta-Zugang anmelden
            </h2>
            <p className="text-slate-400">
              Normalerweise 59€/Monat - als Beta-Tester 3 Monate völlig kostenlos
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Vorname *"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nachname *"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-Mail Adresse *"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />

            <div className="relative">
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full bg-slate-600/50 backdrop-blur border-0 rounded-2xl px-4 py-4 text-white shadow-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Coaching-Erfahrung auswählen *</option>
                <option value="beginner">Anfänger (0-1 Jahre)</option>
                <option value="intermediate">Fortgeschritten (1-3 Jahre)</option>
                <option value="experienced">Erfahren (3-10 Jahre)</option>
                <option value="expert">Experte (10+ Jahre)</option>
              </select>
            </div>

            <div className="relative">
              <select
                name="coachingType"
                value={formData.coachingType}
                onChange={handleChange}
                className="w-full bg-slate-600/50 backdrop-blur border-0 rounded-2xl px-4 py-4 text-white shadow-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Coaching-Schwerpunkt (optional)</option>
                <option value="business">Business Coaching</option>
                <option value="life">Life Coaching</option>
                <option value="career">Career Coaching</option>
                <option value="executive">Executive Coaching</option>
                <option value="health">Health & Wellness</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Beta-Zugang anfordern
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs text-slate-400 text-center">
              * Pflichtfelder. Deine Daten werden vertraulich behandelt und nur für das Beta-Programm verwendet.
            </p>
          </div>
        </div>

        {/* Beta Benefits */}
        <div className="mt-12 bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Das bekommst du als Beta-Tester
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">3 Monate kostenlos</h4>
                  <p className="text-sm text-slate-400">Vollzugang zu allen Premium-Features (Wert: 177€)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Direkter Draht zum Team</h4>
                  <p className="text-sm text-slate-400">Features mitgestalten und direkt Feedback geben</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Exklusive Community</h4>
                  <p className="text-sm text-slate-400">Discord-Zugang mit anderen Beta-Coaches</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Lebenslanger Discount</h4>
                  <p className="text-sm text-slate-400">20% Rabatt auf alle zukünftigen Pläne</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Early Access zu neuen Features</h4>
                  <p className="text-sm text-slate-400">Immer zuerst die neuesten Funktionen testen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Kostenlose Migration</h4>
                  <p className="text-sm text-slate-400">Wir helfen beim Import deiner bestehenden Coachee-Daten</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Beta-Timeline</h3>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full">Jetzt: Anmeldung</div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <div className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Jan 2025: Beta-Start</div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <div className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Apr 2025: Public Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
}