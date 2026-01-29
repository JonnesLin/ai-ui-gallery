'use client';

import { useState } from 'react';

export default function LuxuryRegister() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/10 p-1 rounded-2xl">
          <div className="bg-black rounded-2xl p-8 border border-amber-400/20">
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-black">♔</span>
              </div>
              <h1 className="text-4xl font-serif text-amber-400 mb-2 tracking-wide">Exclusive Access</h1>
              <p className="text-amber-400/60 text-sm tracking-widest uppercase">Create Your Account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-xs font-medium text-amber-400/80 mb-2 uppercase tracking-widest">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-4 rounded-lg bg-gradient-to-r from-amber-400/5 to-amber-400/10 border border-amber-400/30 text-amber-400 placeholder-amber-400/30 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all"
                  placeholder="Enter your username"
                />
                {errors.username && <p className="mt-2 text-xs text-red-400/80">{errors.username}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-amber-400/80 mb-2 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-lg bg-gradient-to-r from-amber-400/5 to-amber-400/10 border border-amber-400/30 text-amber-400 placeholder-amber-400/30 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-2 text-xs text-red-400/80">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-amber-400/80 mb-2 uppercase tracking-widest">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-4 rounded-lg bg-gradient-to-r from-amber-400/5 to-amber-400/10 border border-amber-400/30 text-amber-400 placeholder-amber-400/30 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all"
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-2 text-xs text-red-400/80">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-medium text-amber-400/80 mb-2 uppercase tracking-widest">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-4 rounded-lg bg-gradient-to-r from-amber-400/5 to-amber-400/10 border border-amber-400/30 text-amber-400 placeholder-amber-400/30 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="mt-2 text-xs text-red-400/80">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start bg-amber-400/5 rounded-lg p-4 border border-amber-400/20">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 h-4 w-4"
                />
                <label htmlFor="terms" className="ml-3 text-xs text-amber-400/70 leading-relaxed">
                  I agree to the <a href="#" className="text-amber-400 underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-amber-400 underline">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeTerms && <p className="text-xs text-red-400/80">{errors.agreeTerms}</p>}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-600 text-black py-4 rounded-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all font-semibold text-lg tracking-wide uppercase"
              >
                Create Account
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-400/20"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-black text-amber-400/60 uppercase tracking-widest">Or Continue With</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {['Google', 'Apple', 'Microsoft'].map((name) => (
                  <button
                    key={name}
                    type="button"
                    className="bg-amber-400/5 border border-amber-400/20 text-amber-400/70 py-3 rounded-lg hover:bg-amber-400/10 hover:border-amber-400/40 transition-all text-xs font-medium"
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="border-t border-amber-400/20 pt-6 mt-8">
                <p className="text-center text-sm text-amber-400/60">
                  Already a member?{' '}
                  <a href="#" className="text-amber-400 font-semibold hover:underline">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
