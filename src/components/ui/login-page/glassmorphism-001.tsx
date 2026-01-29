import { LoginPage } from './LoginPage';

export default function GlassmorphismLoginPage() {
  return (
    <LoginPage
      theme="glassmorphism"
      layout="centered"
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
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
      signUpLink={{
        text: "Don't have an account?",
        href: '#',
        onClick: () => console.log('Sign up clicked'),
      }}
    />
  );
}
