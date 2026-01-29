import { CookieBanner } from './CookieBanner';

export default function FlatCookieBanner() {
  return (
    <CookieBanner
      theme="flat"
      position="bottom"
      variant="bar"
      title="We Use Cookies"
      description="This website uses cookies to ensure you get the best experience on our website."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
