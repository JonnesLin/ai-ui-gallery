'use client';

import { useState } from 'react';

export default function PastelRegister() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
            <h1 className="text-3xl font-bold text-purple-600 mb-2">Create Account</h1>
            <p className="text-purple-400">Join our lovely community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-purple-600 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-900 placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="Choose a username"
              />
              {errors.username && <p className="mt-1 text-xs text-pink-500">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-purple-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-900 placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-pink-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-purple-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-900 placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="Create a password"
              />
              {errors.password && <p className="mt-1 text-xs text-pink-500">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-purple-600 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-900 placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-pink-500">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start bg-purple-50 rounded-2xl p-4">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-purple-600">
                I agree to the <a href="#" className="text-pink-500 font-semibold underline">Terms of Service</a> and{' '}
                <a href="#" className="text-pink-500 font-semibold underline">Privacy Policy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-pink-500">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-4 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all font-semibold text-lg"
            >
              Create Account ✨
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-purple-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white/80 text-purple-400 font-semibold">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="bg-pink-50 border-2 border-pink-200 text-pink-600 py-3 rounded-2xl hover:bg-pink-100 transition-all font-semibold">
                Google
              </button>
              <button type="button" className="bg-purple-50 border-2 border-purple-200 text-purple-600 py-3 rounded-2xl hover:bg-purple-100 transition-all font-semibold">
                Facebook
              </button>
              <button type="button" className="bg-blue-50 border-2 border-blue-200 text-blue-600 py-3 rounded-2xl hover:bg-blue-100 transition-all font-semibold">
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-purple-500 pt-4">
              Already have an account?{' '}
              <a href="#" className="text-pink-500 font-bold underline">
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
