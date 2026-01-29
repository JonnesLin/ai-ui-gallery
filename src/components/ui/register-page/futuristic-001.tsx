'use client';

import { useState } from 'react';

export default function FuturisticRegister() {
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

    if (!formData.username) newErrors.username = 'Username required';
    if (!formData.email) newErrors.email = 'Email required';
    if (!formData.password) newErrors.password = 'Password required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'Agreement required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-45 shadow-lg shadow-blue-500/50">
              <div className="w-8 h-8 bg-slate-900 rounded-lg -rotate-45"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Initialize Account
            </h1>
            <p className="text-blue-400 text-sm font-light">Advanced registration system</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-blue-500/30 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                  placeholder="Enter identifier"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              {errors.username && <p className="mt-1 text-xs text-red-400">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-blue-500/30 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                  placeholder="user@domain.io"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-blue-500/30 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                  placeholder="Secure passphrase"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-blue-500/30 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                  placeholder="Re-enter passphrase"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded"
              />
              <label htmlFor="terms" className="ml-3 text-xs text-blue-300">
                I accept the <a href="#" className="text-blue-400 underline font-semibold">Terms</a> and{' '}
                <a href="#" className="text-blue-400 underline font-semibold">Privacy Protocol</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-red-400">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all font-semibold text-lg uppercase tracking-wider relative overflow-hidden group"
            >
              <span className="relative z-10">Initialize</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-500/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-slate-900/50 text-blue-400 uppercase tracking-widest">Alternative Access</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['Google', 'GitHub', 'Azure'].map((name) => (
                <button
                  key={name}
                  type="button"
                  className="bg-slate-950/50 border border-blue-500/30 text-blue-400 py-3 rounded-lg hover:bg-blue-500/10 hover:border-blue-500 transition-all text-xs font-semibold uppercase"
                >
                  {name}
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-blue-400 pt-4">
              Existing account?{' '}
              <a href="#" className="text-blue-500 font-semibold hover:underline uppercase tracking-wider">
                Access Here
              </a>
            </p>
          </form>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
