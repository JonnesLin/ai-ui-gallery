import { LoginPage } from './LoginPage';

export default function MaterialLogin() {
  return (
    <LoginPage
      theme="material"
      layout="centered"
      title="Sign in"
      subtitle="to continue to your account"
      onSubmit={(data) => {
        console.log('Login submitted:', data);
      }}
      showRememberMe
      showForgotPassword
      socialLogins={[
        {
          provider: 'google',
          icon: undefined,
          onClick: () => console.log('Google login'),
        },
        {
          provider: 'github',
          icon: undefined,
          onClick: () => console.log('GitHub login'),
        },
      ]}
      footerLinks={[
        { text: 'Help', href: '#' },
        { text: 'Privacy', href: '#' },
        { text: 'Terms', href: '#' },
      ]}
    />
  );
}
