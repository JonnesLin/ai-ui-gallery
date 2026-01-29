'use client';

import { RegisterPage } from './RegisterPage';

export default function DarkRegister() {
  return (
    <RegisterPage
      theme="dark"
      layout="centered"
      title="Create Account"
      subtitle="Start your journey with us"
      logo={
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto"></div>
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
            icon: <span>Google</span>,
            onClick: () => console.log('Google login'),
          },
          {
            provider: 'github',
            icon: <span>GitHub</span>,
            onClick: () => console.log('GitHub login'),
          },
          {
            provider: 'apple',
            icon: <span>Apple</span>,
            onClick: () => console.log('Apple login'),
          },
        ],
      }}
    />
  );
}
