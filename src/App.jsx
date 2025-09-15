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

  console.log('Supabase Config:', {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_ANON_KEY
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

    console.log('Starte Beta-Anfrage...');
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

      console.log('Supabase Antwort:', { data, error });

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
        const generatedDemoLink = `https://desktop-app-coaching.vercel.app?demo=${newUser.demo_token}`;
        setDemoLink(generatedDemoLink);
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
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-400">CoachingSpace</div>
            <button 
              onClick={() => scrollToSection('beta-request')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Beta-Zugang anfordern
            </button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Die Zukunft des Coachings
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            CoachingSpace revolutioniert die Coaching-Branche durch triadische KI-Integration.
          </p>
          <button 
            onClick={() => scrollToSection('beta-request')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Beta-Zugang anfordern
          </button>
        </div>
      </section>

      <section id="beta-request" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Beta-Zugang anfordern</h2>
            <p className="text-xl text-slate-300">
              Du erhältst sofort einen personalisierten Demo-Zugang.
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
                </div>
              )}
              
              
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Demo jetzt starten
              </a>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Vorname *</label>
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
                  <label className="block text-sm font-medium mb-2">Nachname *</label>
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
                <label className="block text-sm font-medium mb-2">E-Mail-Adresse *</label>
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
                <label className="block text-sm font-medium mb-2">Unternehmen / Praxis</label>
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
                <label className="block text-sm font-medium mb-2">Coaching-Erfahrung</label>
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
                  placeholder="Erzähl uns kurz, was dich neugierig macht..."
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
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">CoachingSpace</div>
          <p className="text-slate-400">Die Zukunft des Coachings beginnt hier.</p>
        </div>
      </footer>
    </div>
  );
}
