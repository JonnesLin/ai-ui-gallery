import { CookieBanner } from './CookieBanner';

export default function CorporateCookieBanner() {
  return (
    <CookieBanner
      theme="corporate"
      position="bottom"
      variant="bar"
      title="Cookie Policy"
      description="We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      onCustomize={() => console.log('Customize')}
      showDecline={true}
      showCustomize={true}
    />
  );
}
