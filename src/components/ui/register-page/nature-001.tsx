'use client';

import { useState } from 'react';

export default function NatureRegister() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-200">
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-4xl">🌿</span>
            </div>
            <h1 className="text-3xl font-bold text-green-800 mb-2">Join Our Community</h1>
            <p className="text-green-600">Grow with us naturally</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>🌱</span> Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-green-50/50 border-2 border-green-200 text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="Choose your username"
              />
              {errors.username && <p className="mt-1 text-xs text-red-600">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>🍃</span> Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-green-50/50 border-2 border-green-200 text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>🌳</span> Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-green-50/50 border-2 border-green-200 text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="Create a password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>🌲</span> Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-green-50/50 border-2 border-green-200 text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border border-green-200">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-green-700">
                I agree to the <a href="#" className="text-teal-600 font-semibold underline">Terms of Service</a> and{' '}
                <a href="#" className="text-teal-600 font-semibold underline">Privacy Policy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-red-600">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all font-semibold text-lg flex items-center justify-center gap-2"
            >
              <span>🌸</span> Create Account
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-green-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white/80 text-green-600 font-semibold">Or connect with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="bg-green-100 border-2 border-green-300 text-green-700 py-3 rounded-xl hover:bg-green-200 transition-all font-semibold">
                Google
              </button>
              <button type="button" className="bg-teal-100 border-2 border-teal-300 text-teal-700 py-3 rounded-xl hover:bg-teal-200 transition-all font-semibold">
                Facebook
              </button>
              <button type="button" className="bg-emerald-100 border-2 border-emerald-300 text-emerald-700 py-3 rounded-xl hover:bg-emerald-200 transition-all font-semibold">
                Apple
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-4 mt-6 border border-green-300">
              <p className="text-center text-sm text-green-700">
                Already part of our garden? 🌺{' '}
                <a href="#" className="text-teal-700 font-bold underline">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
