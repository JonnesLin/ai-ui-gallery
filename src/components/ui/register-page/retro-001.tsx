'use client';

import { RegisterPage } from './RegisterPage';

export default function RetroRegister() {
  return (
    <RegisterPage
      theme="material"
      layout="centered"
      title="SIGN UP"
      subtitle="~ WELCOME TO THE 80s ~"
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
            icon: <span className="font-bold">G</span>,
            onClick: () => console.log('Google login'),
          },
          {
            provider: 'facebook',
            icon: <span className="font-bold">F</span>,
            onClick: () => console.log('Facebook login'),
          },
          {
            provider: 'twitter',
            icon: <span className="font-bold">T</span>,
            onClick: () => console.log('Twitter login'),
          },
        ],
      }}
    />
  );
}
