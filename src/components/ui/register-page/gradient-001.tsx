'use client';

import { RegisterPage } from './RegisterPage';

export default function GradientRegister() {
  return (
    <RegisterPage
      theme="gradient"
      layout="centered"
      title="Create Account"
      subtitle="Join our amazing community"
      logo={
        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center">
          <span className="text-3xl text-white font-bold">U</span>
        </div>
      }
      formProps={{
        onSubmit: (data) => {
          console.log('Form submitted:', data);
        },
        termsUrl: "#",
        privacyUrl: "#",
        fields: ['name', 'email', 'password', 'confirmPassword'],
        socialLogins: [
          {
            provider: 'google',
            icon: <span className="font-semibold">Google</span>,
            onClick: () => console.log('Google login'),
          },
          {
            provider: 'facebook',
            icon: <span className="font-semibold">Facebook</span>,
            onClick: () => console.log('Facebook login'),
          },
          {
            provider: 'twitter',
            icon: <span className="font-semibold">Twitter</span>,
            onClick: () => console.log('Twitter login'),
          },
        ],
      }}
    />
  );
}
