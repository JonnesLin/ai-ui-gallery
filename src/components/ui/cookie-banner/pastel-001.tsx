import { CookieBanner } from './CookieBanner';

export default function PastelCookieBanner() {
  return (
    <CookieBanner
      theme="pastel"
      position="bottom"
      variant="bar"
      title="Cookie Notice"
      description="We use cookies to make your experience sweeter. By continuing to browse, you agree to our use of cookies."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
