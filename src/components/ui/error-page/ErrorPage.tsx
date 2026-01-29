import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function ErrorPage({
  code,
  title,
  description,
  illustration,
  actions,
  showHomeButton,
  showBackButton,
  className,
  onHomeClick,
  onBackClick,
}: ErrorPageBaseProps) {
  const renderDefaultActions = () => {
    if (!showHomeButton && !showBackButton && !actions) {
      return null;
    }

    if (actions) {
      return <div className="flex gap-4 justify-center flex-wrap">{actions}</div>;
    }

    return (
      <div className="flex gap-4 justify-center flex-wrap">
        {showHomeButton && (
          <button
            onClick={onHomeClick}
            className="px-8 py-3 bg-black text-white font-bold transition-colors hover:bg-gray-800 rounded"
          >
            Return Home
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-8 py-3 bg-gray-200 text-black font-bold transition-colors hover:bg-gray-300 rounded"
          >
            Go Back
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-white flex items-center justify-center px-4', className)}>
      <div className="text-center max-w-2xl">
        {illustration && <div className="mb-8">{illustration}</div>}

        <h1 className="text-9xl font-black text-black mb-4 leading-none">
          {code}
        </h1>

        <h2 className="text-3xl font-bold text-black mb-4">
          {title}
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          {description}
        </p>

        {renderDefaultActions()}
      </div>
    </div>
  );
}
