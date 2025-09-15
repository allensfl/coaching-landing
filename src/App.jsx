import { useState } from 'react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      setSubmitted(true);
    } else {
      alert('Bitte alle Felder ausfüllen');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          CoachingSpace
        </h1>
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Beta-Zugang anfordern
        </h2>

        {submitted ? (
          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">
              Anfrage erhalten!
            </h3>
            <p className="text-slate-300">
              Danke {formData.firstName}! Wir melden uns bald.
            </p>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-lg p-6 space-y-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Vorname"
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nachname"
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-Mail"
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
            >
              Beta-Zugang anfordern
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
