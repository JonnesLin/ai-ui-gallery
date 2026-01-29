import { CookieBanner } from './CookieBanner';

export default function GlassmorphismCookieBanner() {
  return (
    <CookieBanner
      theme="glassmorphism"
      position="bottom"
      variant="floating"
      description={
        <>
          <span className="font-medium">We value your privacy.</span> This website uses cookies to
          ensure you get the best experience on our website.
        </>
      }
      onAccept={() => console.log('Accepted')}
      onCustomize={() => console.log('Customize')}
      showCustomize={true}
    />
  );
}
