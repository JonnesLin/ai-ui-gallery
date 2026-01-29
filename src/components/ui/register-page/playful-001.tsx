'use client';

import { useState } from 'react';

export default function PlayfulRegister() {
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

    if (!formData.username) newErrors.username = 'Oops! Username is required';
    if (!formData.email) newErrors.email = 'Hey! We need your email';
    if (!formData.password) newErrors.password = 'Password please!';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'Please agree to continue';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-green-400 rounded-full opacity-50"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-[1.01] transition-transform">
          <div className="mb-8 text-center">
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text mb-2">
              Let's Get Started!
            </h1>
            <p className="text-gray-600 font-semibold">Create your awesome account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-purple-600 mb-2 flex items-center gap-2">
                <span>🎮</span> Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border-4 border-purple-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all font-semibold"
                placeholder="Pick a cool username!"
              />
              {errors.username && <p className="mt-1 text-xs text-red-500 font-semibold">❌ {errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-pink-600 mb-2 flex items-center gap-2">
                <span>📧</span> Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border-4 border-pink-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:shadow-lg transition-all font-semibold"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">❌ {errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-orange-600 mb-2 flex items-center gap-2">
                <span>🔐</span> Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border-4 border-orange-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:shadow-lg transition-all font-semibold"
                placeholder="Super secret password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500 font-semibold">❌ {errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                <span>✅</span> Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border-4 border-green-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:shadow-lg transition-all font-semibold"
                placeholder="Type it again!"
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500 font-semibold">❌ {errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-300">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-5 w-5 rounded"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700 font-semibold">
                I agree to the <a href="#" className="text-purple-600 underline font-bold">Terms</a> and{' '}
                <a href="#" className="text-purple-600 underline font-bold">Privacy Policy</a> 🎯
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-red-500 font-semibold">❌ {errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-4 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all font-black text-xl transform"
            >
              🚀 Join the Fun!
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-4 border-gray-300 border-dotted"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-600 font-bold">Or hop in with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="bg-gradient-to-br from-red-400 to-red-500 text-white py-3 rounded-2xl hover:scale-105 transition-all font-bold shadow-lg">
                G
              </button>
              <button type="button" className="bg-gradient-to-br from-blue-400 to-blue-500 text-white py-3 rounded-2xl hover:scale-105 transition-all font-bold shadow-lg">
                f
              </button>
              <button type="button" className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-3 rounded-2xl hover:scale-105 transition-all font-bold shadow-lg">

              </button>
            </div>

            <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl p-4 mt-6 border-2 border-orange-400">
              <p className="text-center text-sm text-gray-700 font-bold">
                Already have an account? 🤔{' '}
                <a href="#" className="text-purple-600 underline font-black">
                  Sign in here!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
