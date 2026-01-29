import { CookieBanner } from './CookieBanner';

export default function GradientCookieBanner() {
  return (
    <CookieBanner
      theme="gradient"
      position="bottom"
      variant="bar"
      title="Cookie Policy"
      description="We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking Settings."
      onAccept={() => console.log('Accepted')}
      onCustomize={() => console.log('Customize')}
      showCustomize={true}
    />
  );
}
