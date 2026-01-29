import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function NeumorphismErrorPage({
  code = '500',
  title = 'Server Error',
  description = "Something went wrong on our end. We're working to fix it.",
  illustration,
  actions,
  showHomeButton = true,
  showBackButton = true,
  className,
  onHomeClick,
  onBackClick,
}: Partial<ErrorPageBaseProps> = {}) {
  const defaultIllustration = (
    <div className="mb-8 inline-block rounded-full p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <svg className="w-32 h-32 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );

  const renderDefaultActions = () => {
    if (actions) {
      return actions;
    }

    if (!showHomeButton && !showBackButton) {
      return null;
    }

    return (
      <div className="flex gap-4 justify-center">
        {showHomeButton && (
          <button
            onClick={onHomeClick}
            className="px-6 py-3 rounded-xl text-gray-700 font-semibold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all"
          >
            Go Home
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-6 py-3 rounded-xl text-gray-700 font-semibold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all"
          >
            Retry
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-gray-200 flex items-center justify-center px-4', className)}>
      <div className="text-center max-w-md">
        {illustration || defaultIllustration}

        <h1 className="text-8xl font-bold text-gray-600 mb-6 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] rounded-2xl py-4">
          {code}
        </h1>

        <h2 className="text-3xl font-bold text-gray-700 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>

        {renderDefaultActions()}
      </div>
    </div>
  );
}
