import { CookieBanner } from './CookieBanner';

export default function ThreeDCookieBanner() {
  return (
    <CookieBanner
      theme="glassmorphism"
      position="bottom"
      variant="floating"
      title="Cookie Settings"
      description="We use cookies to enhance your browsing experience and provide personalized content."
      privacyPolicyUrl="#"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      onCustomize={() => console.log('Customize')}
      showDecline={true}
      showCustomize={true}
    />
  );
}
