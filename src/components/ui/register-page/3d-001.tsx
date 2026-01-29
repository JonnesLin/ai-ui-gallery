'use client';

import { useState } from 'react';

export default function ThreeDRegister() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-2xl transform translate-y-2 translate-x-2 opacity-40"></div>
          <div className="absolute inset-0 bg-white rounded-2xl transform translate-y-1 translate-x-1 opacity-60"></div>

          <div className="relative bg-white rounded-2xl p-8 shadow-2xl" style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="mb-8 text-center">
              <div className="inline-block mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform translate-y-2 translate-x-2 opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform translate-y-1 translate-x-1 opacity-60"></div>
                <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center" style={{
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
                }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.05)'
              }}>Create Account</h1>
              <p className="text-gray-600 font-medium">Join our community today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="relative w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    placeholder="Enter username"
                  />
                </div>
                {errors.username && <p className="mt-2 text-xs text-red-600 font-semibold">{errors.username}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="relative w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    placeholder="Enter email"
                  />
                </div>
                {errors.email && <p className="mt-2 text-xs text-red-600 font-semibold">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="relative w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    placeholder="Enter password"
                  />
                </div>
                {errors.password && <p className="mt-2 text-xs text-red-600 font-semibold">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="relative w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    placeholder="Confirm password"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-2 text-xs text-red-600 font-semibold">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 h-5 w-5 rounded border-2 border-gray-300"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700 font-medium">
                  I agree to the <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">Terms of Service</a> and{' '}
                  <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeTerms && <p className="text-xs text-red-600 font-semibold">{errors.agreeTerms}</p>}

              <div className="relative pt-2">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800 rounded-lg transform translate-y-2"></div>
                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-3.5 rounded-lg font-bold hover:from-indigo-700 hover:to-purple-800 transform hover:-translate-y-0.5 transition-all duration-200"
                  style={{
                    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)'
                  }}
                >
                  Create Account
                </button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200" style={{
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-bold">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <button type="button" className="relative w-full border-2 border-gray-200 bg-white py-3 rounded-lg hover:bg-gray-50 transition-all font-bold text-gray-700" style={{
                    boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
                  }}>
                    Google
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <button type="button" className="relative w-full border-2 border-gray-200 bg-white py-3 rounded-lg hover:bg-gray-50 transition-all font-bold text-gray-700" style={{
                    boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
                  }}>
                    Facebook
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-y-1"></div>
                  <button type="button" className="relative w-full border-2 border-gray-200 bg-white py-3 rounded-lg hover:bg-gray-50 transition-all font-bold text-gray-700" style={{
                    boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
                  }}>
                    Apple
                  </button>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 font-medium pt-4">
                Already have an account?{' '}
                <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
