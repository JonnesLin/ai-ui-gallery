import { CookieBanner } from './CookieBanner';

export default function NeumorphismCookieBanner() {
  return (
    <CookieBanner
      theme="neumorphism"
      position="center"
      variant="floating"
      title="Cookie Notice"
      description="We use cookies to personalize content and analyze our traffic. Please decide if you're willing to accept cookies from our website."
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
