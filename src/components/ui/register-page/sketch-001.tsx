'use client';

import { useState } from 'react';

export default function SketchRegister() {
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
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,.03) 39px, rgba(0,0,0,.03) 40px)`
    }}>
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
          boxShadow: '5px 5px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="mb-8 text-center relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-blue-500 rounded-full" style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            }}></div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 relative inline-block" style={{
              fontFamily: 'Comic Sans MS, cursive, sans-serif'
            }}>
              Join Us!
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,3 Q25,1 50,3 T100,3" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </h1>
            <p className="text-gray-600 mt-4" style={{
              fontFamily: 'Comic Sans MS, cursive, sans-serif'
            }}>Create your account today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
                  fontFamily: 'Comic Sans MS, cursive, sans-serif'
                }}
                placeholder="Pick a username"
              />
              {errors.username && <p className="mt-1 text-xs text-red-600 font-bold">{errors.username}</p>}
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
                  fontFamily: 'Comic Sans MS, cursive, sans-serif'
                }}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600 font-bold">{errors.email}</p>}
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  fontFamily: 'Comic Sans MS, cursive, sans-serif'
                }}
                placeholder="Make it secure!"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600 font-bold">{errors.password}</p>}
            </div>

            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
                  fontFamily: 'Comic Sans MS, cursive, sans-serif'
                }}
                placeholder="Type it again"
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-600 font-bold">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-5 w-5 border-2 border-gray-800 rounded"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700" style={{
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                I agree to the <a href="#" className="text-blue-600 font-bold underline hover:no-underline">Terms</a> and{' '}
                <a href="#" className="text-blue-600 font-bold underline hover:no-underline">Privacy Policy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-red-600 font-bold">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 font-bold hover:bg-blue-600 transition-colors border-2 border-gray-900 shadow-lg relative overflow-hidden"
              style={{
                borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.2)'
              }}
            >
              Create Account!
              <div className="absolute top-1 right-4">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M10,2 L12,8 L10,6 L8,8 Z" fill="white" opacity="0.5"/>
                </svg>
              </div>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <svg className="w-full" height="2" preserveAspectRatio="none" viewBox="0 0 100 2">
                  <path d="M0,1 Q25,0 50,1 T100,1" stroke="#9ca3af" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-600 font-bold" style={{
                  fontFamily: 'Comic Sans MS, cursive, sans-serif'
                }}>or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="border-2 border-gray-800 bg-white py-3 font-bold hover:bg-gray-50 transition-colors" style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                G
              </button>
              <button type="button" className="border-2 border-gray-800 bg-white py-3 font-bold hover:bg-gray-50 transition-colors" style={{
                borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                f
              </button>
              <button type="button" className="border-2 border-gray-800 bg-white py-3 font-bold hover:bg-gray-50 transition-colors" style={{
                borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}>
                in
              </button>
            </div>

            <p className="text-center text-sm text-gray-700 pt-4" style={{
              fontFamily: 'Comic Sans MS, cursive, sans-serif'
            }}>
              Already have an account?{' '}
              <a href="#" className="text-blue-600 font-bold underline hover:no-underline">
                Sign in here!
              </a>
            </p>
          </form>

          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-2 border-green-500 rotate-12" style={{
            borderRadius: '50% 50% 50% 50% / 40% 60% 40% 60%',
          }}></div>
        </div>
      </div>
    </div>
  );
}
