'use client';

import { RegisterPage } from './RegisterPage';

export default function GlassmorphismRegister() {
  return (
    <RegisterPage
      theme="glassmorphism"
      layout="centered"
      title="Create Account"
      subtitle="Start your journey with us"
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
            provider: 'apple',
            icon: <span className="font-semibold">Apple</span>,
            onClick: () => console.log('Apple login'),
          },
        ],
      }}
    />
  );
}
