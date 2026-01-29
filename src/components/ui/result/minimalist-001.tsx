import { Result } from './Result';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function MinimalistResult() {
  const theme = getTheme('minimalist');

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6', theme.pageBackground)}>
      <div className="w-full max-w-md space-y-12">
        <Result
          theme="minimalist"
          status="success"
          title="Success"
          subtitle="Your operation completed successfully"
          extra={
            <button className={cn('px-8 py-2 text-sm', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.border, theme.variants.primary.hover, theme.states.hover)}>
              Continue
            </button>
          }
        />

        <Result
          theme="minimalist"
          status="error"
          title="Error"
          subtitle="Something went wrong with your request"
          extra={
            <div className="flex gap-3 justify-center">
              <button className={cn('px-8 py-2 text-sm', theme.variants.danger.background, theme.variants.danger.text, theme.variants.danger.border, theme.variants.danger.hover, theme.states.hover)}>
                Retry
              </button>
              <button className={cn('px-8 py-2 text-sm', theme.variants.ghost.background, theme.variants.ghost.text, theme.variants.ghost.border, theme.variants.ghost.hover, theme.states.hover)}>
                Back
              </button>
            </div>
          }
        />

        <Result
          theme="minimalist"
          status="warning"
          title="Warning"
          subtitle="Please review before proceeding"
          extra={
            <button className={cn('px-8 py-2 text-sm', theme.variants.warning.background, theme.variants.warning.text, theme.variants.warning.border, theme.variants.warning.hover, theme.states.hover)}>
              Proceed
            </button>
          }
        />

        <Result
          theme="minimalist"
          status="info"
          title="Information"
          subtitle="Here is some important information"
          extra={
            <button className={cn('px-8 py-2 text-sm', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.border, theme.variants.primary.hover, theme.states.hover)}>
              Got it
            </button>
          }
        />
      </div>
    </div>
  );
}