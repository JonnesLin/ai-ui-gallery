import { Result } from './Result';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function NeumorphismResult() {
  const theme = getTheme('neumorphism');

  return (
    <div className={cn('min-h-screen flex items-center justify-center p-6', theme.pageBackground)}>
      <div className="w-full max-w-md space-y-8">
        <Result
          theme="neumorphism"
          status="success"
          title="Success"
          subtitle="Your operation completed successfully"
          className="shadow-[20px_20px_60px_#bebec3,-20px_-20px_60px_#ffffff]"
          extra={
            <button className={cn('px-10 py-4 rounded-2xl font-semibold', theme.variants.success.background, theme.variants.success.text, theme.variants.success.shadow, theme.variants.success.hover, theme.states.hover)}>
              Continue
            </button>
          }
        />

        <Result
          theme="neumorphism"
          status="error"
          title="Error"
          subtitle="Something went wrong"
          className="shadow-[20px_20px_60px_#bebec3,-20px_-20px_60px_#ffffff]"
          extra={
            <div className="flex gap-4">
              <button className={cn('flex-1 px-6 py-4 rounded-2xl font-semibold', theme.variants.danger.background, theme.variants.danger.text, theme.variants.danger.shadow, theme.variants.danger.hover, theme.states.hover)}>
                Retry
              </button>
              <button className={cn('flex-1 px-6 py-4 rounded-2xl font-semibold', theme.variants.secondary.background, theme.variants.secondary.text, theme.variants.secondary.shadow, theme.variants.secondary.hover, theme.states.hover)}>
                Back
              </button>
            </div>
          }
        />

        <Result
          theme="neumorphism"
          status="warning"
          title="Warning"
          subtitle="Please review before proceeding"
          className="shadow-[20px_20px_60px_#bebec3,-20px_-20px_60px_#ffffff]"
          extra={
            <button className={cn('px-10 py-4 rounded-2xl font-semibold', theme.variants.warning.background, theme.variants.warning.text, theme.variants.warning.shadow, theme.variants.warning.hover, theme.states.hover)}>
              Proceed
            </button>
          }
        />

        <Result
          theme="neumorphism"
          status="info"
          title="Information"
          subtitle="Here is important information"
          className="shadow-[20px_20px_60px_#bebec3,-20px_-20px_60px_#ffffff]"
          extra={
            <button className={cn('px-10 py-4 rounded-2xl font-semibold', theme.variants.primary.background, theme.variants.primary.text, theme.variants.primary.shadow, theme.variants.primary.hover, theme.states.hover)}>
              Got it
            </button>
          }
        />
      </div>
    </div>
  );
}