import { CookieBanner } from './CookieBanner';

export default function MinimalistCookieBanner() {
  return (
    <CookieBanner
      theme="minimalist"
      position="bottom"
      variant="bar"
      description="We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
