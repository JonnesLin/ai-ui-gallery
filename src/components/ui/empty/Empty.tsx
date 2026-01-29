import type { EmptyProps } from './types';
import { getEmptyThemeStyles } from './theme-styles';
import { cn } from '../_shared/utils';

export function Empty({
  theme,
  image,
  title,
  description,
  action,
  size = 'md',
  className,
}: EmptyProps) {
  const styles = getEmptyThemeStyles(theme, size);

  return (
    <div className={cn(styles.container, className)}>
      {image && (
        <div className={styles.imageWrapper}>
          <div className={styles.imageSize}>{image}</div>
        </div>
      )}

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>

      {action && <div>{action}</div>}
    </div>
  );
}
