import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Play, Eye, EyeOff, Quote, Users, Calendar, BarChart3, Shield, Zap, Target } from 'lucide-react';

// Simple Auth Context
const AuthContext = React.createContext<{
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
} | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  
  const login = (email: string, password: string) => {
    const validAccounts = [
      'coach1@test.com',
      'coach2@test.com', 
      'beta@coachingspace.com'
    ];
    
    if (validAccounts.includes(email) && password === 'test2024') {
      setUser(email);
      return true;
    }
    return false;
  };
  
  const logout = () => setUser(null);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">CoachingSpace</span>
                <span className="block text-xs text-blue-600 font-medium">PROFESSIONAL BETA</span>
              </div>
            </div>
            <Link 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Beta-Zugang
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-800 text-sm font-semibold">EXKLUSIVER BETA-ZUGANG</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Coaching
              <span className="block text-blue-600">neu gedacht</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Die erste All-in-One Plattform, die speziell für professionelle Coaches entwickelt wurde. 
              Elegant, intuitiv und unglaublich mächtig.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/login"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Play className="mr-3 w-5 h-5" />
                Plattform erkunden
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* App Preview Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-3 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                {/* Browser Header */}
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-1 ml-4 flex-1 text-sm text-gray-600">
                    coachingspace.app/dashboard
                  </div>
                </div>
                {/* App Content */}
                <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Dashboard-Vorschau</h3>
                    <p className="text-gray-600">Vollständige Übersicht über dein Coaching-Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Alles was du brauchst
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine vollständige Lösung für professionelle Coaches. Von der Klientenverwaltung 
              bis zur Rechnungsstellung – alles in einer eleganten Plattform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Management</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Verwalte alle deine Coachees professionell. Von der ersten Kontaktaufnahme 
                bis zum erfolgreichen Abschluss des Coaching-Prozesses.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Session Planung</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Intelligente Terminplanung, automatische Erinnerungen und 
                professionelle Dokumentation deiner Coaching-Sessions.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortschritt Tracking</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Verfolge die Entwicklung deiner Klienten mit detaillierten 
                Analytics und aussagekräftigen Reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Was Coaches sagen
            </h2>
            <p className="text-xl text-gray-600">
              Bereits über 200 professionelle Coaches vertrauen auf unsere Plattform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-12 h-12 text-blue-500 mb-6" />
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                "Als Executive Coach mit über 50 Klienten war ich auf der Suche nach einer 
                Lösung, die mit meinem Business mitwächst. CoachingSpace ist genau das – 
                professionell, intuitiv und unglaublich mächtig."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Sarah Müller</p>
                  <p className="text-gray-600">Executive Coach, München</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-12 h-12 text-green-500 mb-6" />
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                "Die Zeitersparnis ist beeindruckend. Was früher Stunden gedauert hat, 
                erledige ich jetzt in Minuten. Ich kann mich endlich wieder auf das 
                konzentrieren, was wirklich zählt: meine Klienten."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Klein</p>
                  <p className="text-gray-600">Business Coach, Hamburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Info Section */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Werde Beta-Tester
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Als einer der ersten 50 Beta-Tester erhältst du lebenslangen Early-Access, 
            direkten Kontakt zum Entwicklerteam und kannst die Zukunft des 
            Coaching-Managements mitgestalten.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sicher & DSGVO-konform</h3>
                <p className="text-blue-100">Höchste Sicherheitsstandards</p>
              </div>
              <div>
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blitzschnell</h3>
                <p className="text-blue-100">Optimiert für maximale Performance</p>
              </div>
              <div>
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Coaching-fokussiert</h3>
                <p className="text-blue-100">Von Coaches, für Coaches entwickelt</p>
              </div>
            </div>
          </div>
          
          <Link
            to="/login"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            <Eye className="mr-3 w-6 h-6" />
            Jetzt Beta-Zugang sichern
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-white">CoachingSpace</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} CoachingSpace. Entwickelt für professionelle Coaches.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Login Page Component
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      window.location.href = 'http://localhost:8080/app';
    } else {
      setError('Ungültige Anmeldedaten. Verwende: coach1@test.com / test2024');
    }
  };

  const fillDemoCredentials = () => {
    setEmail('coach1@test.com');
    setPassword('test2024');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold text-gray-900 block">CoachingSpace</span>
              <span className="text-xs text-blue-600 font-medium">BETA-ZUGANG</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Beta-Zugang</h1>
          <p className="text-gray-600">Melde dich an, um die Plattform zu testen</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="text-blue-800 font-semibold mb-3">Demo-Anmeldedaten</h3>
          <div className="bg-white rounded-lg p-3 mb-3 font-mono text-sm">
            <p className="text-gray-700">
              E-Mail: coach1@test.com<br/>
              Passwort: test2024
            </p>
          </div>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="text-blue-700 hover:text-blue-800 text-sm underline font-medium"
          >
            Automatisch einfügen
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">E-Mail Adresse</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="deine@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Passwort</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Zur Plattform
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;