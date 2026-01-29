'use client';

import { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
}

export default function BrutalistRegister() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username) newErrors.username = 'REQUIRED';
    if (!formData.email) newErrors.email = 'REQUIRED';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'INVALID FORMAT';
    if (!formData.password) newErrors.password = 'REQUIRED';
    else if (formData.password.length < 8) newErrors.password = 'MIN 8 CHARS';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'NO MATCH';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'MUST AGREE';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-black border-8 border-black p-8" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
          <div className="border-4 border-yellow-400 p-4 mb-8">
            <h1 className="text-3xl font-black text-white uppercase tracking-tight text-center">
              CREATE ACCOUNT
            </h1>
            <p className="text-yellow-400 text-sm font-bold uppercase text-center mt-2">
              NO NONSENSE REGISTRATION
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-black text-yellow-400 mb-2 uppercase tracking-wide">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 border-4 border-white bg-white text-black font-bold uppercase focus:outline-none focus:border-yellow-400"
                placeholder="TYPE HERE"
              />
              {errors.username && <p className="mt-2 text-xs text-yellow-400 font-black">[!] {errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-black text-yellow-400 mb-2 uppercase tracking-wide">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-4 border-white bg-white text-black font-bold uppercase focus:outline-none focus:border-yellow-400"
                placeholder="TYPE HERE"
              />
              {errors.email && <p className="mt-2 text-xs text-yellow-400 font-black">[!] {errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-black text-yellow-400 mb-2 uppercase tracking-wide">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border-4 border-white bg-white text-black font-bold uppercase focus:outline-none focus:border-yellow-400"
                placeholder="TYPE HERE"
              />
              {errors.password && <p className="mt-2 text-xs text-yellow-400 font-black">[!] {errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-black text-yellow-400 mb-2 uppercase tracking-wide">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border-4 border-white bg-white text-black font-bold uppercase focus:outline-none focus:border-yellow-400"
                placeholder="TYPE HERE"
              />
              {errors.confirmPassword && <p className="mt-2 text-xs text-yellow-400 font-black">[!] {errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start border-4 border-white p-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 h-5 w-5 border-2 border-black"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-white font-bold uppercase">
                I AGREE TO <a href="#" className="text-yellow-400 underline">TERMS</a> AND{' '}
                <a href="#" className="text-yellow-400 underline">PRIVACY</a>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-yellow-400 font-black">[!] {errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 border-4 border-white font-black text-xl uppercase hover:bg-white hover:text-black transition-colors transform hover:scale-105"
            >
              [SUBMIT]
            </button>

            <div className="my-6">
              <div className="border-t-4 border-white mb-4"></div>
              <p className="text-center text-white font-black uppercase text-sm">
                OR USE SOCIAL
              </p>
              <div className="border-t-4 border-white mt-4"></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['GOOGLE', 'META', 'APPLE'].map((name) => (
                <button
                  key={name}
                  type="button"
                  className="border-4 border-white text-white py-3 font-black text-xs uppercase hover:bg-white hover:text-black transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="border-4 border-yellow-400 p-4 mt-6">
              <p className="text-center text-sm text-white font-bold uppercase">
                ALREADY REGISTERED?{' '}
                <a href="#" className="text-yellow-400 underline font-black">
                  [LOGIN HERE]
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
