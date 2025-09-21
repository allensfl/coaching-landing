import { useState } from 'react';
import { CheckCircle, Users, Calendar, Brain, Shield, Star, Clock, ArrowRight, Zap, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Beta-Phase pausiert</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">CoachingSpace</span>
              <br />
              <span className="text-white">Wartungsarbeiten</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Wir bereiten die nächste Beta-Runde vor und optimieren die Plattform. 
              Trag dich in unsere Warteliste ein für Updates.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Nächste Beta-Runde: Februar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>47 Coaches auf der Warteliste</span>
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

      {/* Paused Form */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Beta-Phase pausiert
            </h2>
            <p className="text-slate-400">
              Wir arbeiten an wichtigen Verbesserungen und bereiten die nächste Beta-Runde vor.
            </p>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Bleib auf dem Laufenden</h3>
            <p className="text-slate-300 mb-4">
              Trag dich in unsere Warteliste ein und erfahre als Erstes, 
              wenn die nächste Beta-Runde startet.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
              <Mail className="h-5 w-5" />
              <span className="font-medium">info@coachingspace.de</span>
            </div>
            
            <div className="text-sm text-slate-400">
              Oder folge uns für Updates:
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Aktuelle Beta-Tester können weiterhin die Plattform nutzen.
            </p>
          </div>
        </div>

        {/* What's Coming */}
        <div className="mt-12 bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Was wir für die nächste Beta-Runde vorbereiten
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Erweiterte KI-Features</h4>
                  <p className="text-sm text-slate-400">Intelligente Session-Notizen und automatische Strukturierung</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Verbesserte Performance</h4>
                  <p className="text-sm text-slate-400">Schnellere Ladezeiten und optimierte Benutzerführung</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Mobile App</h4>
                  <p className="text-sm text-slate-400">Native iOS/Android Apps für unterwegs</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Erweiterte Integrations</h4>
                  <p className="text-sm text-slate-400">Zoom, Teams, Calendar-Sync und mehr</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Coaching-Templates</h4>
                  <p className="text-sm text-slate-400">Vorgefertigte Workflows für verschiedene Coaching-Methoden</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Team-Features</h4>
                  <p className="text-sm text-slate-400">Multi-Coach-Funktionen für größere Coaching-Praxen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Roadmap</h3>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="bg-orange-600 text-white px-3 py-1 rounded-full">Jetzt: Wartung</div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <div className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Feb 2025: Beta 2.0</div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <div className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Apr 2025: Public Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
}