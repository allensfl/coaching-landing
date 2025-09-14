import React, { useState } from 'react';

export default function App() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const login = () => {
    window.location.href = 'https://desktop-app-coaching.vercel.app';
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    console.log('Feedback submitted:', feedbackData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">C</div>
            <span className="text-xl font-bold">CoachingSpace</span>
          </div>
          <button 
            onClick={login}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Beta-Zugang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-sm text-blue-300">Triadisches KI-Coaching</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Coaching
            <span className="text-blue-400 block">neu gedacht</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Die erste All-in-One-Plattform mit innovativem triadischen KI-Coaching-Modul, 
            speziell für professionelle Coaches entwickelt. Elegant, strukturiert und effektiv.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={login}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-xl"
            >
              Plattform erkunden
            </button>
            
            <button 
              onClick={() => scrollToSection('feedback')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-slate-600"
            >
              Feedback geben
            </button>
          </div>

          {/* App Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              <div className="bg-slate-700 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-sm ml-4">desktop-app-coaching.vercel.app/ki-coaching</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Triadisches KI-Coaching</h3>
                <p className="text-slate-400">Coach + Coachee + KI-Bot im strukturierten 4-Phasen-Prozess</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triadisches KI-Coaching Section */}
      <section className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Triadisches KI-Coaching</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Innovatives Coaching-Modell: Coach, Coachee und KI-Bot arbeiten strukturiert zusammen 
              in einem durchdachten 4-Phasen-Prozess
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">4-Phasen-Prozess</h3>
              <p className="text-slate-300 mb-6">
                Strukturierter Coaching-Ablauf: Problem- & Zielbeschreibung → Problemanalyse → 
                Lösungsstrategie → Abschluss & Transfer
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Phase I: Problem & Ziel
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Phase II: Problemanalyse
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Phase III: Lösungsstrategie
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  Phase IV: Abschluss & Transfer
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-6">📚</div>
              <h3 className="text-2xl font-bold mb-4">Prompt-Bibliothek</h3>
              <p className="text-slate-300 mb-6">
                Umfangreiche Sammlung vorgefertigter Coaching-Aufträge und Gesprächsführungs-Prompts 
                für effektive KI-gestützte Sessions
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

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Video-Integration</h3>
              <p className="text-slate-300 mb-6">
                Coach und Coachee nutzen gemeinsam im Video-Call den integrierten Coach-Bot 
                als dritte Instanz im Coaching-Prozess
              </p>
              <div className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">KI-Modell: Integrierter Coach-Bot (Lokal)</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Triadisches vs Dyadisches */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h4 className="text-xl font-bold mb-4 text-center">Was macht triadisches KI-Coaching besonders?</h4>
            <p className="text-slate-300 text-center max-w-4xl mx-auto">
              Im Gegensatz zum dyadischen KI-Coaching (nur Coach oder nur Coachee mit KI) arbeiten 
              beim triadischen Modell alle drei Parteien <strong>gemeinsam</strong> an der Lösung. 
              Der KI-Bot wird gezielt als Coaching-Assistenz in bestimmten Prozess-Phasen eingesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Traditionelle Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vollständige Coaching-Plattform</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Alle Tools die du als professioneller Coach brauchst - von der Klientenverwaltung bis zur Rechnungsstellung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">👥</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Management</h3>
              <p className="text-slate-300">
                Verwalte alle deine Coachees professionell. Von der ersten Kontaktaufnahme bis zum erfolgreichen Abschluss.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">📅</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Session Management</h3>
              <p className="text-slate-300">
                Terminplanung, Session-Notizen, Dokumentation und Fortschrittsverfolgung in einem System.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">📊</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Analytics</h3>
              <p className="text-slate-300">
                Dashboard mit Kennzahlen, Rechnungsstellung und Business-Insights für dein Coaching-Business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Was Coaches sagen</h2>
            <p className="text-xl text-slate-300">Feedback von professionellen Coaches zum triadischen KI-Coaching</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-2xl mb-4">💬</div>
              <p className="text-lg text-slate-300 mb-6">
                "Das triadische KI-Coaching ist ein Gamechanger. Die strukturierten Phasen und die Prompt-Bibliothek 
                geben dem Coaching-Prozess eine neue Tiefe. Der KI-Bot als dritte Instanz bringt überraschende Perspektiven."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Müller</h4>
                  <p className="text-slate-400">Executive Coach, München</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-2xl mb-4">💬</div>
              <p className="text-lg text-slate-300 mb-6">
                "Die 4-Phasen-Struktur macht die Sessions viel fokussierter. 
                Besonders die Prompt-Bibliothek hilft bei der gezielten Gesprächsführung mit dem KI-Bot."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-semibold">Michael Klein</h4>
                  <p className="text-slate-400">Business Coach, Hamburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section id="feedback" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Dein Feedback ist wertvoll</h2>
            <p className="text-xl text-slate-300">
              Als Coach-Kollege ist deine Meinung entscheidend für die Weiterentwicklung der Plattform
            </p>
          </div>

          {feedbackSubmitted ? (
            <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2 text-green-400">Vielen Dank!</h3>
              <p className="text-slate-300">
                Dein Feedback wurde erfolgreich übermittelt. Wir melden uns in Kürze bei dir.
              </p>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={feedbackData.name}
                    onChange={(e) => setFeedbackData({...feedbackData, name: e.target.value})}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-Mail</label>
                  <input
                    type="email"
                    required
                    value={feedbackData.email}
                    onChange={(e) => setFeedbackData({...feedbackData, email: e.target.value})}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="deine@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Coaching-Bereich</label>
                <input
                  type="text"
                  value={feedbackData.company}
                  onChange={(e) => setFeedbackData({...feedbackData, company: e.target.value})}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                  placeholder="z.B. Executive Coaching, Life Coaching, etc."
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Dein Feedback</label>
                <textarea
                  rows={5}
                  required
                  value={feedbackData.message}
                  onChange={(e) => setFeedbackData({...feedbackData, message: e.target.value})}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Was denkst du über die Plattform? Wie findest du das triadische KI-Coaching-Konzept?"
                />
              </div>
              
              <button
                onClick={handleFeedbackSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <div className="mr-2">📩</div>
                Feedback senden
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Login Section */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Beta-Zugang</h2>
            <p className="text-slate-400">Teste das triadische KI-Coaching mit Demo-Account</p>
          </div>

          <div className="bg-slate-700 rounded-2xl shadow-xl p-8 border border-slate-600">
            <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg mb-6">
              <p className="text-blue-300 text-sm mb-3">Demo-Account verwenden:</p>
              <div className="space-y-2 text-sm text-slate-300">
                <div>E-Mail: coach1@test.com</div>
                <div>Passwort: test2024</div>
              </div>
            </div>
            
            <button
              onClick={login}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              🚀 Zur Plattform
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">C</div>
            <span className="text-xl font-bold">CoachingSpace</span>
          </div>
          <p className="text-slate-400">© 2024 CoachingSpace. Entwickelt für professionelle Coaches.</p>
        </div>
      </footer>
    </div>
  );
}
