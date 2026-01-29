import { CookieBanner } from './CookieBanner';

export default function MonochromeCookieBanner() {
  return (
    <CookieBanner
      theme="monochrome"
      position="bottom"
      variant="bar"
      title="Cookie Notice"
      description="This website uses cookies to improve your experience. By continuing to browse, you agree to our use of cookies."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
