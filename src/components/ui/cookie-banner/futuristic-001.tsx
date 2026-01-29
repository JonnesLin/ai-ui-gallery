import { CookieBanner } from './CookieBanner';

export default function FuturisticCookieBanner() {
  return (
    <CookieBanner
      theme="futuristic"
      position="bottom"
      variant="bar"
      title="Data Collection Protocol"
      description="This interface utilizes tracking modules to optimize your experience. Review our data policy for more details."
      privacyPolicyUrl="#privacy"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      onCustomize={() => console.log('Customize')}
      showDecline={true}
      showCustomize={true}
    />
  );
}
