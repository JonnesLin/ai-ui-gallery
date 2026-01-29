import { CookieBanner } from './CookieBanner';

export default function MaterialCookieBanner() {
  return (
    <CookieBanner
      theme="material"
      position="bottom"
      variant="bar"
      description="This site uses cookies from Google to deliver its services and to analyze traffic."
      privacyPolicyUrl="#"
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
