'use client';

import { useState } from 'react';

export default function NeonRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse delay-75"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-150"></div>

      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-50 blur-xl animate-pulse"></div>

        <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-500 shadow-2xl shadow-pink-500/50">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black mb-2" style={{
              textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
              color: '#ec4899'
            }}>
              REGISTER
            </h1>
            <p className="text-cyan-400 font-semibold tracking-widest" style={{
              textShadow: '0 0 5px #22d3ee'
            }}>
              JOIN THE FUTURE
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <label htmlFor="username" className="block text-xs font-bold text-pink-400 mb-2 uppercase tracking-wider" style={{
                textShadow: '0 0 5px #ec4899'
              }}>
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all"
                style={{
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.6)'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.3)'}
                placeholder="Enter username"
              />
              {errors.username && <p className="mt-1 text-xs text-pink-400">{errors.username}</p>}
            </div>

            <div className="relative group">
              <label htmlFor="email" className="block text-xs font-bold text-pink-400 mb-2 uppercase tracking-wider" style={{
                textShadow: '0 0 5px #ec4899'
              }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all"
                style={{
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.6)'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.3)'}
                placeholder="Enter email"
              />
              {errors.email && <p className="mt-1 text-xs text-pink-400">{errors.email}</p>}
            </div>

            <div className="relative group">
              <label htmlFor="password" className="block text-xs font-bold text-pink-400 mb-2 uppercase tracking-wider" style={{
                textShadow: '0 0 5px #ec4899'
              }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all"
                style={{
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.6)'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.3)'}
                placeholder="Enter password"
              />
              {errors.password && <p className="mt-1 text-xs text-pink-400">{errors.password}</p>}
            </div>

            <div className="relative group">
              <label htmlFor="confirmPassword" className="block text-xs font-bold text-pink-400 mb-2 uppercase tracking-wider" style={{
                textShadow: '0 0 5px #ec4899'
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all"
                style={{
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.6)'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.3)'}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-pink-400">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-pink-500 bg-black"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                I agree to the <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors" style={{
                  textShadow: '0 0 5px #22d3ee'
                }}>Terms</a> and{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors" style={{
                  textShadow: '0 0 5px #22d3ee'
                }}>Privacy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-pink-400">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-black uppercase tracking-wider border-2 border-pink-500 hover:border-cyan-400 transition-all"
              style={{
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 211, 238, 0.7), 0 0 50px rgba(236, 72, 153, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)'}
            >
              Create Account
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-pink-500" style={{
                  boxShadow: '0 0 5px rgba(236, 72, 153, 0.5)'
                }}></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-black text-cyan-400 font-bold uppercase tracking-wider" style={{
                  textShadow: '0 0 5px #22d3ee'
                }}>Or Continue With</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="border-2 border-pink-500 bg-black/50 py-3 rounded-lg hover:border-cyan-400 transition-all text-pink-400 font-bold" style={{
                boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
              }}>
                G
              </button>
              <button type="button" className="border-2 border-pink-500 bg-black/50 py-3 rounded-lg hover:border-cyan-400 transition-all text-pink-400 font-bold" style={{
                boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
              }}>
                f
              </button>
              <button type="button" className="border-2 border-pink-500 bg-black/50 py-3 rounded-lg hover:border-cyan-400 transition-all text-pink-400 font-bold" style={{
                boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
              }}>
                in
              </button>
            </div>

            <p className="text-center text-sm text-gray-300 pt-4">
              Already registered?{' '}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors" style={{
                textShadow: '0 0 5px #22d3ee'
              }}>
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
