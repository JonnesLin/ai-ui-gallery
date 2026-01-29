import { Result } from './Result';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function GradientResult() {
  const theme = getTheme('gradient');

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6', theme.pageBackground)}>
      <div className="w-full max-w-md space-y-8">
        <Result
          theme="gradient"
          status="success"
          title="Success"
          subtitle="Your changes have been saved successfully"
          extra={
            <button className={cn('w-full py-4 rounded-xl font-semibold', theme.variants.success.background, theme.variants.success.text, theme.variants.success.hover, theme.states.hover)}>
              Continue
            </button>
          }
        />

        <Result
          theme="gradient"
          status="error"
          title="Error"
          subtitle="Unable to process your request"
          extra={
            <div className="flex gap-3">
              <button className={cn('flex-1 py-4 rounded-xl font-semibold', theme.variants.danger.background, theme.variants.danger.text, theme.variants.danger.hover, theme.states.hover)}>
                Retry
              </button>
              <button className={cn('flex-1 py-4 rounded-xl font-semibold', theme.variants.secondary.background, theme.variants.secondary.text, theme.variants.secondary.hover, theme.states.hover)}>
                Back
              </button>
            </div>
          }
        />

        <Result
          theme="gradient"
          status="warning"
          title="Warning"
          subtitle="This action requires confirmation"
          extra={
            <button className={cn('w-full py-4 rounded-xl font-semibold', theme.variants.warning.background, theme.variants.warning.text, theme.variants.warning.hover, theme.states.hover)}>
              Confirm
            </button>
          }
        />

        <Result
          theme="gradient"
          status="info"
          title="Information"
          subtitle="Your account has been updated"
          extra={
            <button className={cn('w-full py-4 rounded-xl font-semibold', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.hover, theme.states.hover)}>
              Got it
            </button>
          }
        />
      </div>
    </div>
  );
}