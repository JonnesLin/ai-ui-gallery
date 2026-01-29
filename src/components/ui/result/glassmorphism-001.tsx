import { Result } from './Result';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function GlassmorphismResult() {
  const theme = getTheme('glassmorphism');

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6', theme.pageBackground)}>
      <div className="w-full max-w-md space-y-8">
        <Result
          theme="glassmorphism"
          status="success"
          title="Success!"
          subtitle="Your changes have been saved successfully"
          extra={
            <button className={cn('w-full py-3 rounded-xl font-medium', theme.variants.success.background, theme.variants.success.text, theme.variants.success.hover, theme.states.hover)}>
              Continue
            </button>
          }
        />

        <Result
          theme="glassmorphism"
          status="error"
          title="Error"
          subtitle="Unable to process your request"
          extra={
            <div className="flex gap-3">
              <button className={cn('flex-1 py-3 rounded-xl font-medium', theme.variants.danger.background, theme.variants.danger.text, theme.variants.danger.hover, theme.states.hover)}>
                Retry
              </button>
              <button className={cn('flex-1 py-3 rounded-xl font-medium', theme.variants.ghost.background, theme.variants.ghost.text, theme.variants.ghost.hover, theme.states.hover)}>
                Back
              </button>
            </div>
          }
        />

        <Result
          theme="glassmorphism"
          status="warning"
          title="Warning"
          subtitle="This action requires confirmation"
          extra={
            <button className={cn('w-full py-3 rounded-xl font-medium', theme.variants.warning.background, theme.variants.warning.text, theme.variants.warning.hover, theme.states.hover)}>
              Confirm
            </button>
          }
        />

        <Result
          theme="glassmorphism"
          status="info"
          title="Information"
          subtitle="Your account has been updated"
          extra={
            <button className={cn('w-full py-3 rounded-xl font-medium', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.hover, theme.states.hover)}>
              Got it
            </button>
          }
        />
      </div>
    </div>
  );
}