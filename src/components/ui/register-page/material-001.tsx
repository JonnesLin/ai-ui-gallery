'use client';

import { RegisterPage } from './RegisterPage';

export default function MaterialRegister() {
  return (
    <RegisterPage
      theme="material"
      layout="centered"
      title="Create Account"
      subtitle="Join our platform"
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
            provider: 'facebook',
            icon: <span>Facebook</span>,
            onClick: () => console.log('Facebook login'),
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
