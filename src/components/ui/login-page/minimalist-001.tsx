import { LoginPage } from './LoginPage';

export default function MinimalistLoginPage() {
  return (
    <LoginPage
      theme="minimalist"
      layout="centered"
      title="Welcome back"
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
