import { useEffect } from 'react';
import { cn } from '../_shared/utils';
import type { ToastProps } from './Toast.types';
import { getToastTheme } from './themes';
import { ToastIcon } from './icons';

export function Toast({
  id,
  type,
  theme,
  title,
  description,
  duration = 5000,
  closable = true,
  action,
  onClose,
}: ToastProps) {
  const toastTheme = getToastTheme(theme);
  const styles = toastTheme[type];

  useEffect(() => {
    if (duration === 0) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    onClose?.();
  };

  const toastId = `toast-${id}`;
  const titleId = `${toastId}-title`;
  const descId = description ? `${toastId}-desc` : undefined;

  return (
    <div
      className={cn(
        'flex items-start gap-3',
        styles.container,
        toastTheme.animation
      )}
      role="status"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {styles.icon && <span className={styles.icon} aria-hidden="true" />}

      {styles.iconBackground && (
        <div className={styles.iconBackground} aria-hidden="true">
          <ToastIcon type={type} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p id={titleId} className={styles.title}>{title}</p>
        {description && <p id={descId} className={styles.description}>{description}</p>}
        {action && <div className="mt-2">{action}</div>}
      </div>

      {closable && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
}
