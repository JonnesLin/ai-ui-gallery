'use client';

import { useState } from 'react';

export default function MonochromeRegister() {
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="border-4 border-black p-8">
          <div className="mb-8 pb-8 border-b-4 border-black">
            <h1 className="text-4xl font-black text-black mb-2 uppercase tracking-tight">Register</h1>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">Create New Account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-20 transition-shadow"
                placeholder="Enter username"
              />
              {errors.username && <p className="mt-2 text-xs font-bold text-black">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-20 transition-shadow"
                placeholder="Enter email"
              />
              {errors.email && <p className="mt-2 text-xs font-bold text-black">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-20 transition-shadow"
                placeholder="Enter password"
              />
              {errors.password && <p className="mt-2 text-xs font-bold text-black">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-20 transition-shadow"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="mt-2 text-xs font-bold text-black">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-5 w-5 border-2 border-black"
              />
              <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-800">
                I agree to the <a href="#" className="text-black font-bold underline hover:no-underline">Terms</a> and{' '}
                <a href="#" className="text-black font-bold underline hover:no-underline">Privacy Policy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs font-bold text-black">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-black uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors border-2 border-black"
            >
              Create Account
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-black"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-black font-black uppercase tracking-wider">Or</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="border-2 border-black bg-white py-3 font-bold hover:bg-black hover:text-white transition-colors">
                G
              </button>
              <button type="button" className="border-2 border-black bg-white py-3 font-bold hover:bg-black hover:text-white transition-colors">
                f
              </button>
              <button type="button" className="border-2 border-black bg-white py-3 font-bold hover:bg-black hover:text-white transition-colors">
                in
              </button>
            </div>

            <div className="pt-6 border-t-2 border-gray-300">
              <p className="text-center text-sm font-bold text-gray-800">
                Already registered?{' '}
                <a href="#" className="text-black underline hover:no-underline font-black uppercase">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
