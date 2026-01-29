'use client';

import { RegisterPage } from './RegisterPage';

export default function NeumorphismRegister() {
  return (
    <RegisterPage
      theme="neumorphism"
      layout="centered"
      title="Create Account"
      subtitle="Join our community"
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
            icon: <span className="text-lg">G</span>,
            onClick: () => console.log('Google login'),
          },
          {
            provider: 'facebook',
            icon: <span className="text-lg">f</span>,
            onClick: () => console.log('Facebook login'),
          },
          {
            provider: 'linkedin',
            icon: <span className="text-lg">in</span>,
            onClick: () => console.log('LinkedIn login'),
          },
        ],
      }}
    />
  );
}
