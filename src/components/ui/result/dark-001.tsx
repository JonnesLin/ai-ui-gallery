import { Result } from './Result';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function DarkResult() {
  const theme = getTheme('dark');

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6', theme.pageBackground)}>
      <div className="w-full max-w-md space-y-8">
        <Result
          theme="dark"
          status="success"
          title="Success"
          subtitle="Your operation completed successfully"
          extra={
            <button className={cn('w-full py-3 rounded-lg font-medium', theme.variants.success.background, theme.variants.success.text, theme.variants.success.hover, theme.states.hover)}>
              Continue
            </button>
          }
        />

        <Result
          theme="dark"
          status="error"
          title="Error"
          subtitle="Something went wrong with your request"
          extra={
            <div className="flex gap-3">
              <button className={cn('flex-1 py-3 rounded-lg font-medium', theme.variants.danger.background, theme.variants.danger.text, theme.variants.danger.hover, theme.states.hover)}>
                Retry
              </button>
              <button className={cn('flex-1 py-3 rounded-lg font-medium', theme.variants.secondary.background, theme.variants.secondary.text, theme.variants.secondary.border, theme.variants.secondary.hover, theme.states.hover)}>
                Back
              </button>
            </div>
          }
        />

        <Result
          theme="dark"
          status="warning"
          title="Warning"
          subtitle="Please review before proceeding"
          extra={
            <button className={cn('w-full py-3 rounded-lg font-medium', theme.variants.warning.background, theme.variants.warning.text, theme.variants.warning.hover, theme.states.hover)}>
              Proceed
            </button>
          }
        />

        <Result
          theme="dark"
          status="info"
          title="Information"
          subtitle="Here is some important information"
          extra={
            <button className={cn('w-full py-3 rounded-lg font-medium', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.hover, theme.states.hover)}>
              Got it
            </button>
          }
        />
      </div>
    </div>
  );
}