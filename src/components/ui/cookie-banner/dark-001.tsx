import { CookieBanner } from './CookieBanner';

export default function DarkCookieBanner() {
  return (
    <CookieBanner
      theme="dark"
      position="bottom"
      variant="bar"
      description="This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish."
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
      showDecline={true}
    />
  );
}
