import { CookieBanner } from './CookieBanner';

export default function LuxuryCookieBanner() {
  return (
    <CookieBanner
      theme="luxury"
      position="bottom"
      variant="bar"
      title="Cookie Preferences"
      description="We use cookies to deliver a refined browsing experience. Your privacy matters to us."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      onCustomize={() => console.log('Customize')}
      showDecline={true}
      showCustomize={true}
    />
  );
}
