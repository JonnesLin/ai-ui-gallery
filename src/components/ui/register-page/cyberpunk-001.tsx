'use client';

import { RegisterPage } from './RegisterPage';

export default function CyberpunkRegister() {
  return (
    <RegisterPage
      theme="cyberpunk"
      layout="centered"
      title=">>_ REGISTER"
      subtitle="[ACCESS_PROTOCOL_INITIATED]"
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
            icon: <span className="font-mono">[GOOGLE]</span>,
            onClick: () => console.log('Google login'),
          },
          {
            provider: 'neural',
            icon: <span className="font-mono">[NEURAL]</span>,
            onClick: () => console.log('Neural login'),
          },
          {
            provider: 'cloud',
            icon: <span className="font-mono">[CLOUD]</span>,
            onClick: () => console.log('Cloud login'),
          },
        ],
      }}
    />
  );
}
